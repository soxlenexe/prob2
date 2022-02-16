<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
class PingController extends Controller
{
    public function serverStatus($url){
        //return Http::get($url.':1433/');
        try {
            Http::get($url.':1433/');
            echo 'ok';
            return true;
        } catch (ConnectionException $e) {
            $code = explode(' ',$e->getMessage())[2];
            echo $code;
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
