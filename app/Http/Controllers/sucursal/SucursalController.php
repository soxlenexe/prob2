<?php

namespace App\Http\Controllers\sucursal;

use App\Http\Controllers\Controller;
use App\Http\Controllers\RuntimeDatabaseController;
use App\Http\Controllers\ServiceController;
use App\Http\Requests\CreateSucursalRequest;
use App\Models\Client;
use App\Models\remote\Articulo;
use App\Models\remote\Factura;
use App\Models\Sucursal;
use App\Models\User;
use Error;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SucursalController extends Controller
{
    public function createSucursal(CreateSucursalRequest $request){

        try {
            $sucursal  = new Sucursal();
            $sucursal->dns = $request->input('dns');
            $sucursal->sucursal_descripcion = $request->input('sucursal_descripcion');
            $sucursal->cliente_id = $request->cliente_id;
            $sucursal->save();
        return $sucursal;

        } catch (\Error $e) {
            return $e;
        }
    }

    public function getSucursales(){//api -- cliente_id hace referencia al user id
        //return response();
        $user = Auth::user();
        if ($user->hasRole('admin')) {
            $sucursales = Sucursal::all();
            foreach ($sucursales  as $sucursal ) {
                $sucursal->cliente = Client::find($sucursal->cliente_id, 'cliente_descripcion');
                $sucursal->creado = date('d-m-Y', strTotime($sucursal->created_at));

            }
            return $sucursales;
        }
        $client_id = $user->client_id;
        $sucursales = Sucursal::where('cliente_id', $client_id)->get();
        foreach ($sucursales  as $sucursal ) {
            $sucursal->cliente = Client::find($sucursal->cliente_id, 'cliente_descripcion');
            $sucursal->creado = date('d-m-Y', strTotime($sucursal->created_at));

        }
        return $sucursales;
    }

    public function getSucursalesList(){//solo testing
        return Sucursal::all();
    }

    public function updateSucursal(CreateSucursalRequest $request, $id){

        try {
            $sucursal  = Sucursal::find($id);
            if ($sucursal->dns == null) {
                $sucursal->dns = $request->input('dns');
            }else{
                if(ServiceController::checkDbCompatibility($request->input('dns'),$id)){
                    //return response()->json(['status' => 'checking']);
                    $sucursal->dns = $request->input('dns');

                }else{
                     return response()->json(['status' => 'checking']);
                }
                ;

            }

            $sucursal->sucursal_descripcion = $request->input('sucursal_descripcion');
            $sucursal->activo = $request->input('activo');
            $sucursal->save();
        return response()->json(['status' => 'success']);

        } catch (\Error $e) {
            return $e;
        }
    }

    public function index(){
        return view('abms.abm-sucursal');
    }

    public function storeSucursal(Request $request){

        //$cliente_id = User::find($request->cliente_id)->client_id;

        $plan = Client::find(user_data()->client_id)->plan_id;
        //return response(user_data()->client_id);
        $sucursales_posibles = DB::select('select suc_qty from plans where id = ?', [$plan])[0]->suc_qty;
        $sucursales_actuales = Sucursal::where('cliente_id', user_data()->client_id)->count();
        if ( $sucursales_actuales >= $sucursales_posibles ) {
            return response()->json(['error' => 'suc_limit_reached']);
        }
        if($request->ajax()){
            $sucursal = new Sucursal();
            $sucursal->dns = $request->dns;
            $sucursal->sucursal_descripcion = $request->sucursal_descripcion;
            $sucursal->cliente_id = user_data()->client_id;
            try {
                $sucursal->save();
                DB::insert('insert into client_sucursal (client_id, sucursal_id) values (?, ?)', [user_data()->client_id, $sucursal->id]);
                return response()->json(['sucursales_actuales' => $sucursales_actuales, 'sucursales_permitidas' => $sucursales_posibles]);//["id" => $sucursal->id]

            } catch (\Error $e) {
              return response()->json($e);
            }

        }
    }

    public function changeStatusToActive($id){
        $sucursal = Sucursal::find($id);
        $sucursal->activo = 1;
        $sucursal->save();
        return response()->json(['status'=>'changed']);
    }

    public function changeStatusToInactive($id){
        $sucursal = Sucursal::find($id);
        $sucursal->activo = 0;
        $sucursal->save();
        return response()->json(['status'=>'changed']);
    }

    public function getSucursalesNamesbyClient($id){

            $sucursales = Sucursal::where('cliente_id', $id)->where('activo', true)->get(['sucursal_descripcion', 'dns']);
            $sucursales_checked = $sucursales->filter(function($s){
                    if (dbCheck($s->dns)) {
                       return $s;
                    }
            });
            // $response = [];
            // foreach ($sucursales as $sucursal) {
            //     try {
            //         //ini_set('max_execution_time', 2);
            //         // RuntimeDatabaseController::setEnviron('4545484.asdf.net');
            //         // $art = Articulo::where('Codigo','<>', null)->first();
            //         $art = ping_db($sucursal->dns);
            //         if ($art->count() > 0) {

            //                 array_push($response,$sucursal);
            //             }
            //     } catch (\Throwable $th) {
            //         continue;
            //     }


            // }
            //return $response;



             return $sucursales_checked;

    }

}
