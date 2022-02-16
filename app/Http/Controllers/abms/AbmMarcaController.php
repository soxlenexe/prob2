<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\ChekPermissionService;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CustomEventLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AbmMarcaController extends Controller
{
    public function index($dns = null){
        return view('abms.abm_marcas', compact('dns'));
    }

    public function storeMarca(Request $request){
        $dns = null;
        if ($request->ajax()) {
            $dns = $request->dns;
        }
        ChekPermissionService::check('marcas',$dns);
        $result = DB::connection('sqlsrv')->insert('
            insert into dbo.MARCAS (id,marca) values(?,?)', [$request->idmarca, $request->marca]
        );

        CustomEventLogController::store('dbo.MARCAS', "" ,"create", "", "", $request->marca );

        return response()->json(['status' => $result]);
    }

    public function updateMarca(Request $request){
        $dns=null;
        if ($request->ajax()) {
            $dns = $request->dns;
        }
        ChekPermissionService::check('marcas', $dns);

        try {
           $result = DB::connection('sqlsrv')->table('dbo.MARCAS')
                ->where($request->identifier, $request->id)
                ->update([$request->field => $request->new_value]);

                CustomEventLogController::store(
                    "dbo.MARCAS",
                    $request->id ,
                    "update",
                    $request->field,
                    $request->old,
                     $request->new_value);

            return response()->json(['status' => $result]);

        } catch (\Throwable $th) {
            return $th;
        }



    }
}
