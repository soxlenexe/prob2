<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\RuntimeDatabaseController;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ChekPermissionService;

class ProveedorController extends Controller
{

    public function getProveedores($dns =null){
        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

       $proveedores = DB::connection('sqlsrv')->select('select Nombre,id from dbo.Proveedores');
        return response()->json($proveedores);

    }

    public function getProveedoresList($dns = null){
        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

        $proveedores = DB::connection('sqlsrv')->table('dbo.Proveedores')->get();
        return response()->json($proveedores);

    }



}
