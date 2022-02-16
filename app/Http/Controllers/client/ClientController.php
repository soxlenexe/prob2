<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateClientRequest;
use App\Models\Client;
use App\Models\Sucursal;
use App\Models\User;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    public function createClient(CreateClientRequest $request){

        try {
            $client = new Client();
            $client->cliente_descripcion =$request->input('cliente_descripcion');
            $client->ultima_fecha_pago =$request->input('ultima_fecha_pago');
            $client->motivo_baja_desc = $request->input('motivo_baja_desc');
            $client->activo = $request->input('activo');
            $client->save();
            //enviar mail 
            return $client ;

        } catch (Error $e) {
            return $e;
        }

    }

    public function getClients(){
        $clients = Client::where('activo', true)->orderBy('vencimiento')->get();
        $plans = DB::select('select * from plans where active = ?', [1]);
        foreach ($clients as $client ) {
            //$u = new Carbon($client->ultima_fecha_pago) ;
             $v = new Carbon($client->vencimiento);

            if (Carbon::now() > $v) {
                $client->vencido = true;
            }
            $client->plan = $plans[intval($client->plan_id)-1]->name;
            $client->pcs = $plans[intval($client->plan_id)-1]->pcs;
            $client->mensual = $plans[intval($client->plan_id)-1]->month_price;
        }
        return $clients;
    }

    public function getClientWithSucursales(){

        return Client::with('sucursales')->where('activo', true)->get();
    }

    public function updateClient(CreateClientRequest $request){
        try {
            $client = Client::find($request->id);
            $client->cliente_descripcion = $request->input('cliente_descripcion');
            $client->ultima_fecha_pago = date('d-m-Y', strtotime($request->input('ultima_fecha_pago')));
            $client->motivo_baja_desc = $request->input('motivo_baja_desc');
            $client->vencimiento = date('d-m-Y', strtotime($request->input('vencimiento')));
            $client->activo = $request->input('activo');
            $client->plan_id =  $request->plan_id;

            $client->save();
            return $request;
        } catch (Error $e) {
            return $e;
        }
    }

    public function index(){
        if (auth()->user()->can('create client')) {
            return view('abms.abm_clientes');
        }
        return view('errors.not_found');
    }

    public function storeClient(Request $request){
        //return $request;

        if (auth()->user()->can('create client')){
            $client = new Client();
            $client->cliente_descripcion = $request->cliente_descripcion;
            $client->ultima_fecha_pago = date('d-m-Y', strtotime($request->ultima_fecha_pago));
            $client->vencimiento =  date('d-m-Y', strtotime($request->vencimiento));
            $client->motivo_baja_desc =  $request->motivo_baja_desc;
            $client->admin_email = $request->admin_email;
            $client->plan_id =  $request->plan_id ;
            $client->whatsapp = $request->whatsapp;
            $client->contacto = $request->contacto;
            $client->obs = $request->obs;
            try {
                $client->save();
                return response()->json($client);
            } catch (\Error $e) {
                return $e;
            }
        }

    }

    public function changeStatusToActive($id){
        $client = Client::find($id);
        $client->activo = 1;
        $client->save();
        return response()->json(["status" => "changed"]);
    }
    public function changeStatusToInactive($id){
        $client = Client::find($id);
        $client->activo = 0;
        $client->save();
        return response()->json(["status" => "changed"]);
    }

    public function getSucursalByClient($id){

        if (auth()->user()->can('create client')) {
            $sucursales = Sucursal::where('cliente_id', $id)->get();
            $cliente_id = $id;
            $cliente_name = Client::find($id)->cliente_descripcion;
            foreach ($sucursales as $sucursal)  {
                $sucursal->creado =  date('d-m-Y', strtotime($sucursal->created_at));
            }
            return view('admin.clienteDetail', compact('sucursales', 'cliente_id', 'cliente_name'));
        }
        return "No tienes los permisos necesarios";
    }

    public function getPlansList(){
        $plans = DB::select('select * from plans where active = ?', [1]);
        return $plans;
    }
    public function updateField(Request $request){
        try {
            $cliente = Client::find($request->id);
            $cliente[$request->field] = $request->value;
            $cliente->save();
            return response()->json(["status" => true]);
        } catch (Error $e) {
            return response()->json(["status" => false]);
        }

    }
}
