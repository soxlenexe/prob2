<?php

use App\Http\Controllers\backups\BackupController;
use App\Http\Controllers\remote\ArticulosController;
use App\Http\Controllers\SystemAlertController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;


Route::get('/', function () {
    return redirect('/dashboard');
})->middleware('verified');

Route::get('/service/send_test_mail' , function(){
    Mail::to(['textildelparque@gmail.com','progra.conexionuno@gmail.com'])->send(new \App\Mail\TestMail("Este es un mensaje de aviso de caducidad de pago!"));
});

Auth::routes(['verify' => true]);
Route::post('/vuelogin', [\App\Http\Controllers\Auth\LoginController::class, 'vueLogin']);
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware('verified');
Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'dashboard'])->name('dashboard')->middleware('verified');
/*
--------------------------------------------------------------------------------------------------------
RUTAS DE USUARIO
--------------------------------------------------------------------------------------------------------
*/
Route::put('/users/{id}/update', [\App\Http\Controllers\user\UserController::class, 'updateUser'])->middleware('auth');
Route::delete('/users/{id}/', [\App\Http\Controllers\user\UserController::class, 'deleteUser'])->middleware('auth');
/*
--------------------------------------------------------------------------------------------------------
DASHBOARD DATA
--------------------------------------------------------------------------------------------------------
*/
Route::get('/dashdata/ventasdia', [\App\Http\Controllers\DashboardDataController::class, 'ventas_dia'] );
/*
--------------------------------------------------------------------------------------------------------
RUTAS DE CLIENTE
--------------------------------------------------------------------------------------------------------
*/
Route::post('/clients',[\App\Http\Controllers\client\ClientController::class, 'createClient'])->middleware('auth');
Route::post('/clientes', [\App\Http\Controllers\client\ClientController::class, 'storeClient'] )->middleware('auth');//ok
Route::get('/clientes', [\App\Http\Controllers\client\ClientController::class, 'getClients'] )->middleware('auth');//ok
Route::put('/clientes',[\App\Http\Controllers\client\ClientController::class, 'updateClient'] )->middleware('auth');
Route::get('/abm-clientes',[\App\Http\Controllers\client\ClientController::class, 'index'])->middleware('verified');
Route::get('/clientes/{id}/sucursales',[\App\Http\Controllers\client\ClientController::class, 'getSucursalByClient'])->middleware('auth');
Route::put('/clientes/onstatus/{id}',[\App\Http\Controllers\client\ClientController::class, 'changeStatusToActive']);
Route::put('/clientes/offstatus/{id}',[\App\Http\Controllers\client\ClientController::class, 'changeStatusToInactive']);
Route::put('/clientes/field', [\App\Http\Controllers\client\ClientController::class, 'updateField']);
/*
--------------------------------------------------------------------------------------------------------
RUTAS DE    planes
--------------------------------------------------------------------------------------------------------
*/
Route::get('/clientes/plans',[\App\Http\Controllers\client\ClientController::class, 'getPlansList']);

Route::post('/plans',[\App\Http\Controllers\PlanesController::class, 'storePLan']);
Route::put('/plans',[\App\Http\Controllers\PlanesController::class, 'updateField']);

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE SUCURSAL
--------------------------------------------------------------------------------------------------------
*/
Route::post('/sucursales', [\App\Http\Controllers\sucursal\SucursalController::class, 'createSucursal'])->middleware('auth');
Route::post('/sucursales/ajax', [\App\Http\Controllers\sucursal\SucursalController::class, 'storeSucursal'])->middleware('auth');
Route::put('/sucursales/{id}',  [\App\Http\Controllers\sucursal\SucursalController::class, 'updateSucursal'])->middleware('auth');
Route::get('/abm-sucursales',[\App\Http\Controllers\sucursal\SucursalController::class, 'index'])->middleware('verified');
Route::put('/sucursales/onstatus/{id}',[\App\Http\Controllers\sucursal\SucursalController::class, 'changeStatusToActive']);
Route::put('/sucursales/offstatus/{id}',[\App\Http\Controllers\sucursal\SucursalController::class, 'changeStatusToInactive']);
Route::get('/sucursales', [\App\Http\Controllers\sucursal\SucursalController::class, 'getSucursales'])->middleware('auth');
Route::get('/sucursales/get_names_by_client/{id}', [\App\Http\Controllers\sucursal\SucursalController::class,'getSucursalesNamesbyClient'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE ROLES
--------------------------------------------------------------------------------------------------------
*/
Route::delete('/roles/{id}', [\App\Http\Controllers\RoleController::class,'deleteRole'])->middleware('auth');
Route::put('/roles/{id}', [\App\Http\Controllers\RoleController::class,'updateRole'])->middleware('auth');
Route::post('/roles', [\App\Http\Controllers\RoleController::class,'newRole'])->middleware('auth');
Route::get('/permissions/userpermissions', [\App\Http\Controllers\UserPermissionController::class, 'getPermissions'])->middleware('auth');
Route::get('/permissions/permissions_list', [\App\Http\Controllers\UserPermissionController::class, 'getDCramsPermissions'])->middleware('auth');
Route::get('/permissions/map_permissions', [\App\Http\Controllers\UserPermissionController::class, 'mapDCramsPermissions'])->middleware('auth');
Route::get('/permissions/niveles', [\App\Http\Controllers\UserPermissionController::class, 'getRemoteNiveles'])->middleware('auth');
Route::get('/permissions/operadores', [\App\Http\Controllers\UserPermissionController::class, 'getRemoteOperadores'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE NIVELES
--------------------------------------------------------------------------------------------------------
*/
Route::get('/niveles/get/{dns?}', [\App\Http\Controllers\abms\NivelesController::class, 'getNiveles'])->middleware('verified');
Route::put('/niveles', [\App\Http\Controllers\abms\NivelesController::class, 'updateNivel'])->middleware('verified');
Route::get('/niveles/{lvl}', [\App\Http\Controllers\abms\NivelesController::class, 'getPermissions'])->middleware('verified');
Route::put('/niveles/permission', [\App\Http\Controllers\abms\NivelesController::class, 'setPermission'])->middleware('verified');
/*
--------------------------------------------------------------------------------------------------------
RUTAS DE ABM'S
--------------------------------------------------------------------------------------------------------
*/

Route::get('/abm-usuarios',[\App\Http\Controllers\empleado\EmpleadoController::class, 'index'])->middleware('verified');
Route::get('/abm-usuarios/{id}',[\App\Http\Controllers\empleado\EmpleadoController::class, 'indexByAdmin'])->middleware('verified');
Route::get('/abm-planes', [\App\Http\Controllers\PlanesController::class, 'index'])->middleware('auth');
Route::get('/abm/niveles/{dns?}', [\App\Http\Controllers\abms\NivelesController::class, 'index'])->middleware('auth');
Route::get('/abm/promociones', [\App\Http\Controllers\abms\PromocionesController::class, 'index'])->middleware('auth');
Route::get('/abm/articulos/{dns?}', [\App\Http\Controllers\abms\AbmArticuloController::class, 'index'])->middleware('auth');
    Route::put('/abm/articulos/', [\App\Http\Controllers\abms\AbmArticuloController::class, 'updateArticulo'])->middleware('auth');
    Route::post('/abm/articulos', [\App\Http\Controllers\abms\AbmArticuloController::class, 'storeArticulo'])->middleware('auth');
Route::get('abm/grupos/{dns?}', [\App\Http\Controllers\abms\AbmGrupoController::class, 'index'])->middleware('auth');
    Route::put('abm/grupos', [\App\Http\Controllers\abms\AbmGrupoController::class, 'updateGroup'])->middleware('auth');
    Route::post('abm/grupos', [\App\Http\Controllers\abms\AbmGrupoController::class, 'storeGroup'])->middleware('auth');
Route::get('/abm/marcas/{dns?}', [\App\Http\Controllers\abms\AbmMarcaController::class, 'index'])->middleware('auth');
    Route::post('/marcas', [\App\Http\Controllers\abms\AbmMarcaController::class, 'storeMarca'])->middleware('auth');
    Route::put('/marcas', [\App\Http\Controllers\abms\AbmMarcaController::class, 'updateMarca'])->middleware('auth');

Route::get('/abm/cta_cte/{dns?}',  function(){return 'ctacte';})->middleware('verified');

Route::get('/abm/proveedores/{dns?}', [\App\Http\Controllers\abms\AbmProveedorController::class, 'index'])->middleware('auth');
    Route::post('/abm/proveedores/store',[\App\Http\Controllers\abms\AbmProveedorController::class, 'storeProveedor'])->middleware('auth');
    Route::put('/abm/proveedores',[\App\Http\Controllers\abms\AbmProveedorController::class, 'updateProveedor'])->middleware('auth');
Route::get('/abm/clientes/{dns?}', [\App\Http\Controllers\abms\AbmClienteController::class, 'index'])->middleware('auth');

Route::get('/abm/stock/{dns?}', [\App\Http\Controllers\abms\AbmStockController::class, 'index'])->middleware('auth');
Route::get('/abm/medios/{dns?}', [\App\Http\Controllers\abms\AbmMediosController::class, 'index'])->middleware('auth');

Route::get('/abm-actividad',  [ \App\Http\Controllers\ActividadController::class, 'index' ])->middleware('verified');
Route::put('/clientes/remoto/field',  [\App\Http\Controllers\abms\AbmClienteController::class, 'updateField'])->middleware('auth');
Route::put('/clientes/remoto/list/{dns?',  [\App\Http\Controllers\abms\AbmClienteController::class, 'getClientList'])->middleware('auth');
Route::post('/medios',[\App\Http\Controllers\ServiceController::class, 'storeMedio'])->middleware('auth');
Route::put('/medios',[\App\Http\Controllers\ServiceController::class, 'updateMedio'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE EMPLEADOS
--------------------------------------------------------------------------------------------------------
*/

Route::post('/employee', [\App\Http\Controllers\empleado\EmpleadoController::class, 'storeEmployee'])->middleware('auth');
Route::put('/employee', [\App\Http\Controllers\empleado\EmpleadoController::class, 'updateEmployee'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE alertas de sistema
--------------------------------------------------------------------------------------------------------
*/

Route::resource('/system/alert', SystemAlertController::class)->middleware('verified');
Route::get('/system/alert/list/{id}', [SystemAlertController::class, 'getList'])->middleware('verified');
Route::put('/system/alert/update/{id}', [SystemAlertController::class, 'updateStatus'])->middleware('verified');
/*
--------------------------------------------------------------------------------------------------------
RUTAS DE ENTORNO
--------------------------------------------------------------------------------------------------------
*/

Route::get('/environ',[\App\Http\Controllers\RuntimeDatabaseController::class, 'setEnviron'] );

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE REPORTES
--------------------------------------------------------------------------------------------------------
*/
//ajax reports
Route::get('/ajax/reports/{report}/filtered', [\App\Http\Controllers\reports\DispatchPdfController::class, 'dispatchPdf'])->middleware('auth');
Route::get('/ajax/reports/plane/{report}/{dns}/{mode?}',[\App\Http\Controllers\reports\DispatchPdfController::class, 'dispatchPdfPlane'])->middleware('auth');
///////////////

Route::get('/reportes',[\App\Http\Controllers\ReportController::class, 'index'] )->middleware('verified');
Route::get('/reports/group/{dns?}/{mode?}', [\App\Http\Controllers\reports\GrupoController::class, 'getGroups'])->middleware('auth');

Route::get('/reports/stock_by_group/filtered', [App\Http\Controllers\reports\StockController::class, 'getStockByGroupFiltered'])->middleware('auth');
Route::get('/reports/stock_by_group/{dns?}/{mode?}', [App\Http\Controllers\reports\StockController::class, 'getStockByGroup'])->middleware('auth');


Route::get('/reports/stock_by_proveedor/filtered', [App\Http\Controllers\reports\StockController::class, 'getStockByProviderFiltered'])->middleware('auth');
Route::get('/reports/stock_by_proveedor/{dns?}/{mode?}', [App\Http\Controllers\reports\StockController::class, 'getStockByProvider'])->middleware('auth');


Route::get('/reports/movstock/filtered', [App\Http\Controllers\reports\StockController::class, 'getMovStockFiltered'])->middleware('auth');
Route::get('/reports/movstock/{dns?}/{mode?}', [App\Http\Controllers\reports\StockController::class, 'getMovStock'])->middleware('auth');


Route::get('/reports/venta_by_operador/filtered', [\App\Http\Controllers\reports\VentaController::class, 'getSalesByDateOperatorGroupFiltered'])->middleware('auth');
Route::get('/reports/venta_by_operador/{dns?}/{mode?}', [\App\Http\Controllers\reports\VentaController::class, 'getSalesByDateOperatorGroup'])->middleware('auth');


Route::get('reports/venta_by_fecha_grupo/filtered',[\App\Http\Controllers\reports\VentaController::class, 'getSalesByDateGroupFiltered'])->middleware('auth');
Route::get('reports/venta_by_fecha_grupo/{dns?}/{mode?}',[\App\Http\Controllers\reports\VentaController::class, 'getSalesByDateGroup'])->middleware('auth');


Route::get('reports/venta_by_iva/filtered',[\App\Http\Controllers\reports\VentaController::class, 'getSalesByIvaFiltered'])->middleware('auth');
Route::get('reports/venta_by_iva/{dns?}/{mode?}',[\App\Http\Controllers\reports\VentaController::class, 'getSalesByIva'])->middleware('auth');


Route::get('reports/venta_by_caja_operador/filtered',[\App\Http\Controllers\reports\VentaController::class, 'getSalesByOperatorFiltered'])->middleware('auth');
Route::get('reports/venta_by_caja_operador/{dns?}/{mode?}',[\App\Http\Controllers\reports\VentaController::class, 'getSalesByOperator'])->middleware('auth');


Route::get('/reports/venta_by_horas/filtered', [\App\Http\Controllers\reports\VentaController::class, 'getSalesByHourFiltered'])->middleware('auth');
Route::get('/reports/venta_by_horas/{dns?}/{mode?}', [\App\Http\Controllers\reports\VentaController::class, 'getSalesByHour'])->middleware('auth');


Route::get('/reports/venta_ranking/filtered', [\App\Http\Controllers\reports\VentaController::class, 'getSalesRankingFiltered'])->middleware('auth');
Route::get('/reports/venta_ranking/{dns?}/{mode?}', [\App\Http\Controllers\reports\VentaController::class, 'getSalesRanking'])->middleware('auth');


Route::get('/reports/movimientos_caja/filtered', [\App\Http\Controllers\reports\CajaController::class, 'getMovCajaFiltered'])->middleware('auth');
Route::get('/reports/movimientos_caja/{dns?}/{mode?}', [\App\Http\Controllers\reports\CajaController::class, 'getMovCaja'])->middleware('auth');


Route::get('/reports/venta_medios_de_pago/filtered', [\App\Http\Controllers\reports\CajaController::class, 'getCajaMediosPagoFiltered'])->middleware('auth');
Route::get('/reports/venta_medios_de_pago/{dns?}/{mode?}', [\App\Http\Controllers\reports\CajaController::class, 'getCajaMediosPago'])->middleware('auth');

Route::get('/reports/remitos/filtered', [\App\Http\Controllers\reports\CajaController::class, 'getRemitosFiltered'])->middleware('auth');
Route::get('/reports/remitos/{dns?}/{mode?}', [\App\Http\Controllers\reports\CajaController::class, 'getRemitos'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE GRUPOS
--------------------------------------------------------------------------------------------------------
*/

Route::get('/grupos/{dns?}',[\App\Http\Controllers\reports\GrupoController::class, 'getGroups']);
/*
--------------------------------------------------------------------------------------------------------
RUTAS DE MEDIOS
--------------------------------------------------------------------------------------------------------
*/

Route::get('/medios/{dns?}', [\App\Http\Controllers\ServiceController::class, 'getMediosDePago'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE TIPO DE FACTURA
--------------------------------------------------------------------------------------------------------
*/

Route::get('/tipos_factura/{dns?}', [\App\Http\Controllers\ServiceController::class, 'getTiposFactura'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE OPERADORES
--------------------------------------------------------------------------------------------------------
*/

Route::get('/operadores',[\App\Http\Controllers\OperadorController::class, 'getOperadores']);
Route::get('/operadores/{sucursal}',[\App\Http\Controllers\OperadorController::class, 'getOperadoresSucursal']);
Route::get('/operadores/dns/{dns?}',[\App\Http\Controllers\OperadorController::class, 'getOperadores']);

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE PROVEEDORES
--------------------------------------------------------------------------------------------------------
*/
Route::get('/proveedores/{dns?}', [\App\Http\Controllers\ProveedorController::class, 'getProveedores'])->middleware('auth');
Route::get('/proveedores/list/get/{dns?}', [\App\Http\Controllers\ProveedorController::class, 'getProveedoresList'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE CAJA
--------------------------------------------------------------------------------------------------------
*/

Route::get('/cajas/{dns?}', [\App\Http\Controllers\ServiceController::class, 'getCajas'])->middleware('auth');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE SERVICIO (BORRAR EN PRODUCCION ALGUNAS)
--------------------------------------------------------------------------------------------------------
*/
 // ping
 Route::get('/pingserver/{url}', [\App\Http\Controllers\PingController::class, 'serverStatus']);


Route::get('/service/show_user', [\App\Http\Controllers\ServiceController::class, 'getAuthUserInfo']);
Route::get('/service/check', [\App\Http\Controllers\ChekPermissionService::class, 'check']);
Route::get('/service/articulos/max_id',  [\App\Http\Controllers\ServiceController::class, 'getMaxArticuloId'])->middleware(('auth'));
Route::get('/service/articulos/marcas/{dns?}',  [\App\Http\Controllers\ServiceController::class, 'getMarcas'])->middleware(('auth'));
Route::get('/service/ivas/{dns?}',  [\App\Http\Controllers\ServiceController::class, 'getTiposIva'])->middleware(('auth'));
Route::get('/service/resp_iva/{dns?}',[\App\Http\Controllers\ServiceController::class, 'getRespIva'])->middleware(('auth'));

Route::get('service/get_presets/{id}', [App\Http\Controllers\ServiceController::class, 'getUserAbmPresets']);
Route::post('service/get_presets/{id}', [App\Http\Controllers\ServiceController::class, 'storeAbmPresets']);

Route::put('service/get_presets/{id}', [App\Http\Controllers\ServiceController::class, 'updatePreset']);
Route::get('/service/raw_data/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'getRawData']);

Route::get('service/remotedb/articulos/{dns}', [App\Http\Controllers\remote\ArticulosController::class, 'index']);

/*
--------------------------------------------------------------------------------------------------------
ROLLBACK
--------------------------------------------------------------------------------------------------------
*/

Route::post('/rollback/undo', [\App\Http\Controllers\RollbackController::class, 'undo'])->middleware('auth');


/*
--------------------------------------------------------------------------------------------------------
set user data dns
--------------------------------------------------------------------------------------------------------
*/

Route::get('/setdns', function(){
    //App\Models\User::find(Auth::id())->setCurrentDns();
    return App\Models\User::find(Auth::id())->setCurrentDns();;
});

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE SESSION
--------------------------------------------------------------------------------------------------------
*/

Route::get('/get-sessions',[\App\Http\Controllers\sessions\SessionController::class, 'getSessions'])->middleware('verified');
Route::get('/delete-session', [\App\Http\Controllers\sessions\SessionController::class, 'deleteSession'])->middleware('verified');

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE CONSOLIDADOS
--------------------------------------------------------------------------------------------------------
*/
Route::get('/consolidados/total_ventas/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'ventasTotales']);
Route::get('/consolidados/total_ventas_anterior/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'ventasTotalesAnterior']);
Route::get('/consolidados/formas_de_pago/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'formaDePagoValorizada']);
Route::get('/consolidados/venta_operador/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'ventaPorOperadorValorizada']);
Route::get('/consolidados/mas_vendidos/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'rankingArticulosVendidos']);
Route::get('/consolidados/evolucion_ventas/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'evolucionDeVentas']);
Route::get('/consolidados/venta_horaria/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'ventaHorariaValorizada']);
Route::get('/consolidados/venta_dia/{dns}', [\App\Http\Controllers\DashboardAsyncController::class, 'ventasDelDia']);

/*
--------------------------------------------------------------------------------------------------------
RUTAS DE ACCIONES MASIVAS
--------------------------------------------------------------------------------------------------------
*/

Route::post('/massive/lista', [ArticulosController::class, 'massiveLista'])->middleware('verified');
Route::post('/massive/lista/filtered', [ArticulosController::class, 'massiveListaFiltered'])->middleware('verified');
Route::get('/massive/count/{dns?}',[ArticulosController::class, 'getArticulosCount'])->middleware('verified');
Route::post('/massive/count/filter/{dns?}',[ArticulosController::class, 'getArticulosCountFilter'])->middleware('verified');
Route::post('/massive/round',[ArticulosController::class, 'massiveRounded'])->middleware('verified');
/*
--------------------------------------------------------------------------------------------------------
RUTAS DE BACKUP
--------------------------------------------------------------------------------------------------------
*/
Route::get('/articulos/backup/{dns?}', [BackupController::class, 'articulosBackup'])->middleware('verified');
Route::get('/articulos/backup/available/{dns?}', [BackupController::class, 'getArticulosBackups'])->middleware('verified');
Route::post('/articulos/backup/restore', [BackupController::class, 'restoreBackup'])->middleware('verified');
