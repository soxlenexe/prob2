<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\ChekPermissionService;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\CustomEventLogController;
use Carbon\Carbon;

class AbmGrupoController extends Controller
{
    public function index($dns = null){
        return view('abms.abm_grupos', compact('dns'));
    }

    public function storeGroup(Request $request, $dns = null){
        if ($request->ajax()) {
            $dns = $request->dns;
        }
        if (ChekPermissionService::check('grupos',$dns) ) {

            $id = DB::connection('sqlsrv')->select('select MAX(cast (id as int)) id from dbo.grupos');

             $result = DB::connection('sqlsrv')->insert('
            INSERT INTO dbo.grupos (id, descripcion) VALUES (?,?)
            ', [$id[0]->id+1,$request->descripcion]);

            CustomEventLogController::store("dbo.grupos", $id[0]->id+1 ,"create", "", "", $request->descripcion);

            return response()->json(['status' => $result, 'id' => $id[0]->id+1]);
        }
    }


    public function updateGroup(Request $request, $dns = null){
        if (ChekPermissionService::check('grupos',$dns) ) {
            $grupo_old_value = DB::connection('sqlsrv')->table('dbo.grupos')
                        ->where('id', '=', $request->id)
                        ->limit(1)
                        ->get('descripcion');

            $result = DB::connection('sqlsrv')->table('dbo.grupos')
                ->where('id', $request->id)
                ->update(['descripcion' => $request->descripcion]);

            CustomEventLogController::store("dbo.grupos", $request->id ,"update", "descripcion", $grupo_old_value[0]->descripcion, $request->descripcion);

            return response()->json(['status' => $result]);
        }

    }
}
