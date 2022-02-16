<?php

namespace App\Http\Controllers;

use App\Models\remote\Articulo;

class RuntimeDatabaseController extends Controller
{
    static public function setEnviron($host = '0.0.0.0' ){   //$host = '194.163.145.107'

        // if ($host === '0.0.0.0' || $host === '127.0.0.1') {
        //     config([
        //         'database.connections.sqlsrv.host' => '127.0.0.1',
        //         'database.connections.sqlsrv.password' => 'admin123',
        //         'database.connections.sqlsrv.username' => 'david',
        //         'database.connections.sqlsrv.port' => "52235",
        //         'database.connections.sqlsrv.database' => 'pventa']);
        //        return config('database.connections.sqlsrv');
        // }else{
        //     config([
        //         'database.connections.sqlsrv.host' => $host,
        //         //'database.connections.sqlsrv.host' => 'DESKTOP-GC4RH27',
        //         'database.connections.sqlsrv.password' => 'pvs_4128',//env('DB_PASSWORD2'),//'
        //         //'database.connections.sqlsrv.password' => 'gustavo123',
        //         'database.connections.sqlsrv.username' => 'sa',
        //         'database.connections.sqlsrv.port' => "1433",
        //         'database.connections.sqlsrv.database' => 'pventa']);

        // }

        config([
            'database.connections.sqlsrv.host' => 'dcrams-prueba.ddns.net',
            //'database.connections.sqlsrv.host' => 'DESKTOP-GC4RH27',
            'database.connections.sqlsrv.password' => 'pvs_4128',//env('DB_PASSWORD2'),//'
            //'database.connections.sqlsrv.password' => 'gustavo123',
            'database.connections.sqlsrv.username' => 'sa',
            'database.connections.sqlsrv.port' => "1433",
            'database.connections.sqlsrv.database' => 'pventa']);
    }
}
