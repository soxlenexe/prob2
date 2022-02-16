<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class ChekPermissionService extends Controller
{
    static public function  check($permiso ='mnuniveles', $dns = null){


        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
                RuntimeDatabaseController::setEnviron($dns);
            }




        if (Auth::user()->hasRole('client')) {
            return true;
        }
        $user_data = user_data();
        //chequear que esxista el nombre de operador en dbo.Operadores
        //chequear el nivel
        $nivel = DB::connection('sqlsrv')->table('dbo.Operadores')
            ->where('dbo.Operadores.Operador', '=', $user_data->data["operador"])
            ->get(['Nivel']);
        //obtener los usuarios del permiso en cuestion
        $usuarios = DB::connection('sqlsrv')->table('dbo.Permisos')
            ->where('dbo.Permisos.modulo', '=', $permiso)
            ->get('usuarios');
        //evaluar si el nivel esta permitido por ese permiso
        if (str_contains($usuarios[0]->usuarios,$nivel[0]->Nivel )){
            return true;
        }

        return false;
    }
}
