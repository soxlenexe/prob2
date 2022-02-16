<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\RuntimeDatabaseController;
use App\Models\Employee;
use App\Models\Preset;
use App\Models\User;
use Error;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function getAuthUserInfo(){
        return user_data();
    }

    public function getMediosDePago($dns = null){
        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

        $data = DB::connection('sqlsrv')->table('dbo.medios')
            ->get();
        return response()->json($data);

    }

    public function storeMedio(Request $request){
        ChekPermissionService::check('mnumedios');
        try {
            $result =  DB::connection('sqlsrv')->insert(
                "INSERT INTO dbo.medios (numero, descripcion) VALUES ($request->numero,' $request->descripcion')");
            return response()->json(['status' => $result]);

        } catch (Error $th) {
            return response()->json($th);
        }
    }

    public function updateMedio(Request $request){
        if(ChekPermissionService::check('mnumedios')){
            //return response()->json($request);
            try {
            $result = DB::connection('sqlsrv')->table('dbo.medios')
                    ->where('numero', $request->id)
                    ->update([$request->field => $request->new_value]);//, 'modificado' => Carbon::now()]);

                    CustomEventLogController::store(
                        "dbo.medios",
                        $request->id ,
                        "update",
                        $request->field,
                        $request->old,
                        $request->new_value);

                return response()->json([
                    'status' => $result
                ]);

            } catch (\Throwable $th) {
                return $th;
        }

        }
    }

    public function getTiposFactura($dns = '0'){
        if ($dns == '0') {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

         $lista_tipos = DB::connection('sqlsrv')->select(
            'SELECT DISTINCT Tipo FROM dbo.Facturas'
        );
        //return $lista_tipos;
        $lista = collect($lista_tipos)->map(function($t){
            return ['Tipo' => trim($t->Tipo)];
        });

        return response()->json($lista);
    }

    public function getCajas($dns = '0'){
        if ($dns == '0') {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

        $lista_cajas = DB::connection('sqlsrv')->select(
            'SELECT DISTINCT Caja FROM dbo.Facturas'
        );
        return response()->json($lista_cajas);
    }

    public function getMaxArticuloId(){
        RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        $res = DB::connection('sqlsrv')->select('select MAX(cast (Codigo as int)) Codigo from dbo.Articulos');
        return $res[0]->Codigo+1;

    }

    public function getMarcas($dns = null){
        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }
        $res = DB::connection('sqlsrv')->table('dbo.MARCAS')->get();
        return response()->json($res);
    }

    public function getTiposIva($dns = null){
        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

        $res = DB::connection('sqlsrv')->table('dbo.Iva')->get();
        return response()->json($res);
    }

    public function getRespIva($dns=null){
        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

        $res = DB::connection('sqlsrv')->table('dbo.Resp_Iva')->get();
        return response()->json($res);
    }

    public static function checkDbCompatibility($dns_new, $id)
    {
        $users_mysql = Employee::where('sucursal', $id)->get();
        $operadores = [];
        if (count($users_mysql) > 0) {
            RuntimeDatabaseController::setEnviron($dns_new);
            $users_dns = DB::connection('sqlsrv')->table('dbo.Operadores')->get();
            foreach ($users_dns as $user_dns) {
                array_push($operadores, $user_dns->Operador);
            }
            foreach ($users_mysql as $user) {
                if( !in_array($user->name,$operadores)){
                    return false;
                }
            }
        }

        return true;
    }

    public static function getUserAbmPresets($id){

        $preset = Preset::where('user_id', $id)->first();

        return $preset;
    }

    public function storeAbmPresets(Request $request, $id){
        $preset = new Preset();
        $preset->user_id = $id;
        $preset->preset_1 = $request->preset1;
        $preset->save();
        return response()->json(['status' => 'ok']);
    }

    public function updatePreset(Request $request, $id){
        $preset = Preset::where('user_id', $id)->first();
        $preset->preset_1 = $request->preset1;
        $preset->preset_2 = $request->preset2;
        $preset->last_selected = $request->last_selected;
        $preset->save();
        return response()->json(['status' => 'ok']);
    }
}
