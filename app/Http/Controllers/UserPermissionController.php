<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\RuntimeDatabaseController;
use Illuminate\Support\Facades\DB;

class UserPermissionController extends Controller
{
    public function getPermissions(){
        $user = Auth::user();
        return getUserPermissions($user);
    }

    public function getDCramsPermissions(){
        RuntimeDatabaseController::setEnviron();
        $data = DB::connection('sqlsrv')->table('dbo.Permisos')
            ->get();
        return $data;
    }

    public function mapDCramsPermissions(){
        $permisos_dcrams = $this->getDCramsPermissions();
        $output=[];
        foreach ($permisos_dcrams as $permiso) {
            if (substr($permiso->formulario,2,1) != "-") {
               Permission::create([ 'name' => $permiso->modulo]);
                array_push($output, ['creado'=> $permiso->modulo, 'formulario' => $permiso->formulario]);
            }

        }
        return $output;
    }

    public function getRemoteNiveles(){
        RuntimeDatabaseController::setEnviron();
        $niveles = DB::connection('sqlsrv')->table('dbo.Niveles')->get();

        return response()->json($niveles);
    }

    public function getRemoteOperadores(){
        RuntimeDatabaseController::setEnviron();
        $operadores = DB::connection('sqlsrv')->table('dbo.Operadores')->get();
        return response()->json($operadores);

    }
}
