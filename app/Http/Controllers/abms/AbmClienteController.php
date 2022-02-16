<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\ChekPermissionService;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CustomEventLogController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AbmClienteController extends Controller
{
    public function index($dns = null){
        ChekPermissionService::check('clientes', $dns);
        $clientes = DB::connection('sqlsrv')->table('dbo.Clientes')->get();

        return view('abms.abm_clientes_remoto', compact('clientes'));
    }

    public function updateField(Request $request){
        if(ChekPermissionService::check('clientes')){
            try {
            $result = DB::connection('sqlsrv')->table('dbo.Clientes')
                    ->where($request->identifier, $request->id)
                    ->update([$request->field => $request->new_value]);//, 'modificado' => Carbon::now()]);

                    CustomEventLogController::store(
                        "dbo.Clientes",
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
}
