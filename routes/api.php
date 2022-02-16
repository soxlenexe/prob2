<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users/{id}',[\App\Http\Controllers\user\UserController::class, 'getUserDetail']);
Route::get('/users',[\App\Http\Controllers\user\UserController::class, 'getUsers']);

//clients

// Route::get('/clientes', [\App\Http\Controllers\client\ClientController::class, 'getClients'] );
Route::get('/clientes/sucursales', [\App\Http\Controllers\client\ClientController::class, 'getClientWithSucursales'] );

//sucursales
Route::get('/sucursales', [\App\Http\Controllers\sucursal\SucursalController::class, 'getSucursalesList']);

Route::post('/sucursales', [\App\Http\Controllers\sucursal\SucursalController::class, 'storeSucursal']);

Route::put('/sucursales/{id}',[\App\Http\Controllers\sucursal\SucursalController::class, 'updateSucursal']);

//roles
Route::get('/roles', [\App\Http\Controllers\RoleController::class,'getRoleList']);

 // ping
Route::get('/pingserver/{host}', [\App\Http\Controllers\PingController::class, 'serverStatus']);
