<?php

use App\Http\Controllers\RuntimeDatabaseController;
use App\Models\remote\Articulo;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

if (! function_exists('date_formatted')) {
    function date_formatted($date, $format = 'd/m/Y'){
        return date($format, strtotime($date));
    }
}
if (! function_exists('money')) {
    function money($numeric){
        return number_format($numeric, 2, ',', '.');
    }
}

if (! function_exists('getUserPermissions')) {
    function getUserPermissions($user){
        return $user->getAllPermissions();
    }
}

if (! function_exists('user_data')) {
    function user_data($dns = ''){
        if (null ===  Auth::user()) {
            return;
        }
        return User::find(Auth::id())->customPermission($dns);
    }
}

if (! function_exists('dbCheck')) {
    function dbCheck($url = ''){

        try {
            // Puerto por default es 1433
            if($url == '127.0.0.1'){
                $c = Http::get($url.':52235/');
            }else{
                $c = Http::get($url.':1433/');
            }
            


        } catch (ConnectionException $e) {
            $code = explode(' ',$e->getMessage())[2];

            if ($code == '52:') { //nothing was returned
                return true;
            }
            if ($code == '28:') { //timed out (server apagado o no responde)
                return false;
            }
           return false;
        }
    }
}
