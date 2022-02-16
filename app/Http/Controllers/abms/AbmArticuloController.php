<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\ChekPermissionService;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CustomEventLogController;
use App\Http\Controllers\RuntimeDatabaseController;
use App\Models\remote\Articulo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class AbmArticuloController extends Controller
{

    public function index($dns =  null){

        if(ChekPermissionService::check('articulos', $dns) ){

            $data = DB::connection('sqlsrv')->table('dbo.Articulos')
                    ->join('dbo.grupos', 'dbo.Articulos.Grupo', 'dbo.grupos.id')
                    ->join('dbo.Iva', 'dbo.Articulos.Iva' , '=', 'dbo.Iva.numero')
                    ->join('dbo.Proveedores','dbo.Proveedores.id','=', 'dbo.Articulos.IdProveedor' )
                    ->join('dbo.StockSuc', 'dbo.Articulos.codigo', '=', 'dbo.StockSuc.articulo' )
                    ->limit(200)
                    ->get(['CantMax', 'Codigo', 'Costo', 'dbo.Articulos.Descripcion', 'Grupo', 'IdProveedor', 'ImpInt', 'Iva', 'L1',
                            'L2', 'L3', 'Nombre', 'Porcentaje', 'PtoPed', 'Stock', 'UltCompra' , 'cantpack', 'dbo.grupos.descripcion',
                            'marcas', 'modificado', 'rentabilidad']);
                    //dd($data);
            return view('abms.articulos', compact('data', 'dns'));
        };
        return view('errors.forbidden');
    }

    public function updateArticulo(Request $request){
        $dns = null;
        if ($request->dns != null) {
            $dns = $request->dns;
        }
        if(ChekPermissionService::check('articulos', $dns)){

            try {


                $articulo = Articulo::where($request->identifier,$request->id)->first();
                $articulo[$request->field] =  $request->new_value;
                $articulo->modificado = Carbon::now();
                $articulo->save();

                    if ($request->field == 'L1') {
                        $articulo->rentabilidad =((floatval($articulo->L1) / floatval($articulo->Costo)) -1) * 100 ;
                         $articulo->save();
                    }
                    if ($request->field == 'Costo' || $request->field == 'rentabilidad') {
                        $articulo->L1 = floatval($articulo->Costo) * ( floatval($articulo->rentabilidad)/100) + floatval($articulo->Costo);
                         $articulo->save();
                    }

                    CustomEventLogController::store(
                        "dbo.Articulos",
                        $request->id ,
                        "update",
                        $request->field,
                        $request->old,
                        $request->new_value);

                return response()->json($articulo);

            } catch (\Throwable $th) {
                return $th;
        }

        }
    }

    public function storeArticulo(Request $request){

        if (ChekPermissionService::check('articulos')) {
            $fecha = Date::now();
            $grupo = $request->grupo['id'];
            //$sucursal = user_data()->data['sucursal_descripcion'];

        $consulta = DB::connection('sqlsrv')->insert("
           INSERT INTO dbo.Articulos (
                Codigo, Descripcion ,Costo, L1,L2,L3, Grupo, PtoPed, IdProveedor, C_stock, Iva,
                CantMax, rentabilidad, marcas, modificado, contenido, umedida)
                VALUES (
                    $request->codigo, '$request->descripcion', $request->costo, $request->l1,$request->l2, $request->l3,
                    $grupo, $request->pto_pedido, 1, $request->con_stock, $request->iva,
                    $request->cant_max, $request->renta, '$request->marca', '$fecha', $request->contenido, '$request->unidad'
                        )"
                    );
            DB::connection('sqlsrv')->insert("
                        INSERT INTO dbo.StockSuc(Articulo, Sucursal,Stock)
                        VALUES($request->codigo, 'Central', $request->stock)");
            if ($consulta == true) {
                CustomEventLogController::store("dbo.Articulos", $request->codigo ,"create", "nuevo articulo",'', $request->descripcion);
            }
        return response()->json($consulta);
        }
    }
}
