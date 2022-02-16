<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\ChekPermissionService;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\CustomEventLogController;

class AbmProveedorController extends Controller
{

    public function index($dns = null){
        if (ChekPermissionService::check('proveedores', $dns)) {
            return view('abms.abm_proveedores', compact('dns'));
        }
        return view('errors.forbidden');

    }

    public function storeProveedor(Request $request){
        if ( ChekPermissionService::check('proveedores') ) {
            $id = DB::connection('sqlsrv')->select('select MAX(id) id from dbo.Proveedores');
            $result = DB::connection('sqlsrv')->insert('
                INSERT INTO dbo.Proveedores ( Nombre, RespIva, Cuit, telefonos, Direccion, Localidad, Email, Contacto, provincia,saldo, idprov)
                    VALUES (?,?,?,?,?,?,?,?,?,?,?)
                ', [ $request->nombre, $request->resp_iva, $request->cuit, $request->telefono, $request->direccion,
                    $request->localidad,$request->email,$request->contacto, $request->provincia, $request->saldo , $request->idprov]);

               CustomEventLogController::store("dbo.Proveedores", $id[0]->id+1 ,"create", "", "", $request->nombre);
               $prov=DB::connection('sqlsrv')->table('dbo.Proveedores')->where('id', '=', $id[0]->id+1)->get();
            return response()->json(['status' => $result, 'nuevo_prov' => $prov[0]]);
        }
    }

    public function updateProveedor(Request $request){
        if (ChekPermissionService::check('proveedores')) {
            //obtengo el valor anterior
            $proveedor_old_value = DB::connection('sqlsrv')->table('dbo.Proveedores')
                        ->where('id', '=', $request->id)
                        ->limit(1)
                        ->get($request->field);

            $field = $request->field;
            //cambio en DB por el valor nuevo
            $result = DB::connection('sqlsrv')->table('dbo.Proveedores')
                ->where('id', $request->id)
                ->update([$request->field => $request->newValue]);
            //log
            CustomEventLogController::store("dbo.Proveedores", $request->id ,"update", $request->field, $proveedor_old_value[0]->$field, $request->newValue);

            return response()->json(['status' => [$request->id, $request->field, $proveedor_old_value[0]->$field, $request->newValue]]);
        }
    }
}
