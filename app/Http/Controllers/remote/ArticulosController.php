<?php

namespace App\Http\Controllers\remote;

use App\Http\Controllers\ChekPermissionService;
use App\Http\Controllers\Controller;
use App\Http\Controllers\RuntimeDatabaseController;
use App\Models\remote\Articulo;
use App\Models\remote\Factura;
use App\Models\remote\Remito;
use Carbon\Carbon;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticulosController extends Controller
{

    public function index(Request $request, $dns){
        if ($request->ajax()) {
        RuntimeDatabaseController::setEnviron($dns);
        $articulos = Factura::whereBetween('Fecha', [Carbon::now()->subMonths(4), Carbon::now()])->sum('pago');

        return response()->json(['data' => ['suc1' => $articulos,
                                 'suc_dns' => user_data()->data['dns'],
                                 'env' =>  config('database.connections.sqlsrv')]]) ;
            }

        return view('errors.not_found');
    }
//-----------------------------------------------
    public function massiveLista(Request $request){
        RuntimeDatabaseController::setEnviron($request->dns);
        if ($request->ajax()) {

            $monto = $request->monto;
            $operacion = $request->operacion;
            $lista_base = $request->selected_base;
            $lista_modificable = $request->selected_modificar;
            $tipo_monto = $request->tipo_monto;
            $op = $monto/100;
            $query = [];
            //AUMENTAR
            if ($request->operacion == 'aumentar' && $tipo_monto == 'porcentaje') {
                $query = [$lista_modificable => DB::raw($lista_base . '* ('.$op.') + '. $lista_base)];
            }
            if ($request->operacion == 'aumentar' && $tipo_monto == 'monto') {
                $query = [$lista_modificable => DB::raw($lista_base . '+ '.$monto)];
            }
            //DSIMINUIR
            if ($request->operacion == 'disminuir' && $tipo_monto == 'monto') {
               $query = [$lista_modificable => DB::raw($lista_base . '- '.$monto)];
            }
            if ($request->operacion == 'disminuir' && $tipo_monto == 'porcentaje') {
                $query = [$lista_modificable => DB::raw($lista_base . '* ('.-$op.') + '. $lista_base)];
            }




            $result = Articulo::where('Codigo','>', '0')->update($query);

            if ($result != 0 && $lista_modificable == 'L1') {
                $nq =['rentabilidad' => DB::raw('((L1 / Costo )-1) * 100 ' )];

                    Articulo::where('Codigo','>', '0')->where('Costo' , '>', '0')->update($nq);
            }

            if ($result != 0 && $lista_modificable == 'Costo') {
                $nq =['L1' => DB::raw('Costo * (rentabilidad / 100) + Costo' )];

                    Articulo::where('Codigo','>', '0')->where('Costo' , '>', '0')->update($nq);
            }


            return response()->json(['affected' => $result, 'query' => $lista_base . ' * ('. $monto.'/100) + '. $lista_base]);

        }else{
            return response('Bad Request', 400);
        }

    }

    public function getArticulosCount($dns){
        if ($dns != null) {
            RuntimeDatabaseController::setEnviron($dns);

        }else{
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);

        }
        $articulos = Articulo::all()->count();
        return response()->json(['registros' => $articulos]);
    }


    public function getArticulosCountFilter(Request $request, $dns){
        if ($dns != null) {
            RuntimeDatabaseController::setEnviron($dns);

        }else{
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);

        }
        switch ($request->type) {
            case 'articulo':
                $registros = Articulo::whereBetween($request->orden, [$request->desde, $request->hasta])->count();
                $datos = ['desde'  => $request->desde, 'hasta' => $request->hasta, 'orden' => $request->orden, 'registros' => $registros];
                return response()->json($datos);
                break;
            case 'marca':
                $registros = Articulo::where('marcas',$request->marca)->count();
                $datos = ['marca'  => $request->marca, 'registros' => $registros];
                return response()->json($datos);
                break;
            case 'proveedor':
                $registros = Articulo::where('IdProveedor',$request->proveedor)->count();
                $datos = ['proveedor'  => $request->proveedor, 'registros' => $registros];
                return response()->json($datos);
                break;
            case 'grupo':
                $registros = Articulo::where('Grupo',$request->grupo)->count();
                $datos = ['grupo'  => $request->grupo, 'registros' => $registros];
                return response()->json($datos);
                break;

            default:
                return response('Bad Request', 400);
                break;
        }



    }

    public function massiveListaFiltered(Request $request){
        $data = [
            "orden" => $request->orden, //cuando  filtro es articulo orden es "descripcion" o "codigo"
            "marca" => $request->marca,
            "grupo" => $request->grupo,
            "desde" => $request->desde,
            "hasta" => $request->hasta,
            "tipo"  => $request->type,
            "lista" => $request->lista,
            "monto" => $request->monto, // puede ser monto fijo o porcentaje
            "aumentar_disminuir" => $request->aumentar_disminuir,
            "operacion" => $request->operacion,
            "proveedor" => $request->proveedor,
            "dns" => $request->dns
        ];
        $op = $data['monto']/100;
        RuntimeDatabaseController::setEnviron($data['dns']);
        //AUMENTAR
        if ($data['aumentar_disminuir'] == 'aumentar' && $data['operacion'] == 'porcentaje') {
            $query = [$data['lista'] => DB::raw($data['lista'] . '* ('.$op.') + '. $data['lista'])];
        }
        if ($data['aumentar_disminuir'] == 'aumentar' && $data['operacion'] == 'monto') {
            $query = [$data['lista'] => DB::raw($data['lista'] . '+ '.$data['monto'])];
        }
        //DSIMINUIR
        if ($data['aumentar_disminuir'] == 'disminuir' && $data['operacion'] == 'monto') {
           $query = [$data['lista'] => DB::raw($data['lista'] . '- '.$data['monto'])];
        }
        if ($data['aumentar_disminuir'] == 'disminuir' && $data['operacion'] == 'porcentaje') {
            $query = [$data['lista'] => DB::raw($data['lista'] . '* ('.-$op.') + '. $data['lista'])];
        }

        if ($data['tipo'] == 'articulo') {
             $articulos = Articulo::whereBetween($data['orden'],[ $data['desde'], $data['hasta']])->update($query);
        }

        if ($data['tipo'] == 'marca') {
            $articulos = Articulo::where('marcas',$data['marca'])->update($query);
       }
       if ($data['tipo'] == 'proveedor') {
        $articulos = Articulo::where('IdProveedor',$data['proveedor'])->update($query);
        }

        if ($data['tipo'] == 'grupo') {
            $articulos = Articulo::where('Grupo',$data['grupo'])->update($query);
            }

            //****************** */
            if ($articulos != 0 && $data['lista'] == 'L1') {
                $nq =['rentabilidad' => DB::raw('((L1 / Costo )-1) * 100 ' )];

                    Articulo::where('Codigo','>', '0')->where('Costo' , '>', '0')->update($nq);
            }

            if ($articulos != 0 && $data['lista'] == 'Costo') {
                $nq =['L1' => DB::raw('Costo * (rentabilidad / 100) + Costo' )];

                    Articulo::where('Codigo','>', '0')->where('Costo' , '>', '0')->update($nq);
            }


        return response($articulos);
    }
//-----------------REDONDEO------------------
    public function massiveRounded(Request $request){
        $data = [
            "orden" => $request->orden, //cuando  filtro es articulo orden es "descripcion" o "codigo"
            "marca" => $request->marca,
            "grupo" => $request->grupo,
            "desde" => $request->desde,
            "hasta" => $request->hasta,
            "tipo"  => $request->type,
            "lista" => $request->lista,
            "monto" => $request->monto, // puede ser monto fijo o porcentaje
            "aumentar_disminuir" => $request->aumentar_disminuir,
            "operacion" => $request->operacion,
            "proveedor" => $request->proveedor,
            "dns" => $request->dns
        ];
        RuntimeDatabaseController::setEnviron($data['dns']);

        if ($request->completa) {
            $articulos = Articulo::where('Codigo','<>', 'null')->update([$data['lista'] => DB::raw('ROUND('.$data['lista'].','.$request->value.')')]);
            return $articulos;
            }

        if ($data['tipo'] == 'articulo' && $request->completa == false) {
            $articulos = Articulo::whereBetween($data['orden'],[ $data['desde'], $data['hasta']])->update([$data['lista'] => DB::raw('ROUND('.$data['lista'].','.$request->value.')')]);
            }

        if ($data['tipo'] == 'marca' && $request->completa == false) {
            $articulos = Articulo::where('marcas',$data['marca'])->update([$data['lista'] => DB::raw('ROUND('.$data['lista'].','.$request->value.')')]);
        }
        if ($data['tipo'] == 'proveedor' && $request->completa == false) {
        $articulos = Articulo::where('IdProveedor',$data['proveedor'])->update([$data['lista'] => DB::raw('ROUND('.$data['lista'].','.$request->value.')')]);
        }

        if ($data['tipo'] == 'grupo' && $request->completa == false) {
            $articulos = Articulo::where('Grupo',$data['grupo'])->update([$data['lista'] => DB::raw('ROUND('.$data['lista'].','.$request->value.')')]);
           }



        return $articulos;
    }



}
