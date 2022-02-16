<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\Controller;
use App\Http\Controllers\RuntimeDatabaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ChekPermissionService;
use App\Http\Controllers\CustomEventLogController;
use App\Models\Employee;

class NivelesController extends Controller
{
    public function index($dns = null){
        if(ChekPermissionService::check('mnuniveles', $dns)){
            return view('abms.niveles', compact('dns'));
        }
        return view('errors.forbidden');

    }

    public function getNiveles(Request $request, $dns =null){
        if ( $request->ajax() ) {
            if ($dns != null) {
                ChekPermissionService::check('mnuniveles', $dns);
            } else {
                ChekPermissionService::check('mnuniveles');
            }


            $niveles = DB::connection('sqlsrv')->table('dbo.niveles')->get();
            return response()->json($niveles);
        }
        return response('', 404);
    }

    public function updateNivel(Request $request){
        if(ChekPermissionService::check()){
            //return response()->json(['id' => $request->id,'campo' => $request->field, 'nuevo_valor' => $request->new_value ]);
            try {

               // return $this->setOperator(user_data()->client_id, $request->old, user_data()->sucursal_id, $request->new_value);
            $result = DB::connection('sqlsrv')->table('dbo.Niveles')
                    ->where('nombre', $request->id)
                    ->update([$request->field => $request->new_value]);//, 'modificado' => Carbon::now()]);

                    CustomEventLogController::store(
                        "dbo.Niveles",
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

    public function getPermissions($lvl){
        ChekPermissionService::check();

        $permisos = DB::connection('sqlsrv')->table('dbo.permisos')->get();
        // $filtered = [];
        // foreach ($permisos as $permiso ) {
        //     if (substr_count($permiso->usuarios, $lvl) >=1) {
        //         array_push($filtered, $permiso->usuarios);
        //     }

        // }

        return response()->json(['permisos' => $permisos]);

    }

    // private function setOperator($company_id, $operator_name, $sucursal, $new_name){
    //     $employees = Employee::where('cliente_id', $company_id)->where('sucursal', $sucursal)->where('name', $operator_name)->get();
    //     if (count($employees) == 1) {
    //         return $employees[0];
    //     }
    // }

    public function setPermission(Request $request){
        ChekPermissionService::check();

        $result = DB::connection('sqlsrv')->table('dbo.permisos')
            ->where('modulo', $request->permiso)
            ->update(['usuarios' => $request->new_usuarios]);
        return response()->json(['status' => $result]);
    }

}
