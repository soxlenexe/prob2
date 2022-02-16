<?php

namespace App\Http\Controllers\reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\RuntimeDatabaseController;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Barryvdh\DomPDF\Facade as PDF;

use function PHPUnit\Framework\isType;

class CajaController extends Controller
{
    public function __construct(){
        // RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
    }
    public function getMovCaja(Request $request){
        RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Caja')
                ->join('dbo.Medios', 'dbo.Caja.Idpago', "=", "dbo.Medios.numero")
                ->whereBetween('Fecha', [Carbon::now()->subDays(30) , Carbon::now()])
                //->where('motivo', '<>', 'Remito' )
                ->orderBy('caja','asc')
                ->orderBy('Fecha')
                ->get();

        $data_caja = $data->groupBy('caja')->map(function($caja){
            return $caja->groupBy('Operador');
        });

        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.movimientos_caja', compact('data_caja'));
                return $pdf->download('reporte-movimientos-caja.pdf');
            }
        return view('reports.movimientos_caja', compact('data_caja'));
    }
//-----------------------------------------------------------------
    public function getMovCajaFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();

        $data = DB::connection('sqlsrv')->table('dbo.Caja')
                ->join('dbo.Medios', 'dbo.Caja.Idpago', "=", "dbo.Medios.numero")
                ->whereBetween('Fecha', [$desde, $hasta])
                ->where('motivo', '<>', 'Remito' )
                ->orderBy('caja','asc')
                ->orderBy('Fecha')
                ->get();

        $data_caja = $data->groupBy('caja')->map(function($caja){
            return $caja->groupBy('Operador');
        });
        if ($request->mode == 'pdf') {

            $pdf = PDF::loadView('reports.movimientos_caja', compact('data_caja'));
                return $pdf->download('reporte-movimientos-caja.pdf');
            }
        return view('reports.movimientos_caja', compact('data_caja'));

    }
//-----------------------------------------------------------------------------------

    public function getCajaMediosPago(Request $request){

        try {
             $dns_list = explode(',',$request->dns );
        } catch (\Throwable $th) {
            //throw $th;
        }

        if (count($dns_list) > 1 ) {
           return "va a consolidado";
        }

        // return user_data()->data['dns'];
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);

        $context = "Datos correspondientes a los ultimos 30 dias";
        $data = DB::connection('sqlsrv')->table('dbo.Caja')
                    ->join('dbo.Medios', 'dbo.Caja.Idpago', "=", "dbo.Medios.numero")
                    ->join('dbo.Facturas', function($join){
                        $join->on('dbo.Caja.Idfactura', "=" , "dbo.Facturas.idorig")
                            ->on('dbo.Facturas.caja', '=', 'dbo.Caja.caja')
                        ;})
                    ->whereBetween('dbo.Caja.fecha',[Carbon::now()->subDays(30) ,Carbon::now()])
                    ->where('motivo', '<>', 'Remito' )
                    ->orderBy('dbo.Caja.fecha')
                    ->get([
                        'Idfactura',
                        'Idpago',
                        'Monto',
                        'dbo.Caja.sucursal',
                        'dbo.Caja.fecha',
                        'dbo.Caja.operador',
                        'dbo.Caja.caja',
                        'descripcion',
                        'Tipo',
                        'Nro',
                        'Cupon'
                    ]);

        foreach ($data as $key ) {
            $key->Fecha_dia = date('d/m/Y', strtotime($key->fecha));
            }
        $data_caja = $data->groupBy('Fecha_dia')->map(function($fecha){
            return $fecha->groupBy('caja')->map(function($caja){
                return $caja->groupBy('descripcion');
            });
        });
        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_medios_de_pago', compact('data_caja', 'context'));
            return $pdf->download('reporte-x-medios-de-pago.pdf');
        }

        return view('reports.venta_medios_de_pago', compact('data_caja', 'context'));

    }


    public function getCajaMediosPagoFiltered(Request $request){

        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $medio = $request->query()['medio'];
        $caja = $request->query()['caja'];
        $tipo = $request->query()['tipo'];
        //return $tipo;
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        //dd($request->query());
        $data = DB::connection('sqlsrv')->table('dbo.Caja')
                    ->join('dbo.Medios', 'dbo.Caja.Idpago', "=", "dbo.Medios.numero")
                    ->join('dbo.Facturas', function($join){
                        $join->on('dbo.Caja.Idfactura', "=" , "dbo.Facturas.idorig")
                            ->on('dbo.Facturas.caja', '=', 'dbo.Caja.caja')
                        ;})
                    ->whereBetween('dbo.Caja.fecha',[$desde , $hasta])
                    //->where('motivo', '<>', 'Remito' )
                    ->when($medio != 'TODOS', function($query) use ($medio){return $query->where('descripcion','=', $medio);})
                    //->where('descripcion' , '=' , $medio)
                    ->when($caja != 'TODAS', function($query) use ($caja){return $query->where('dbo.Caja.caja','=', $caja);})
                    //->where('dbo.Caja.caja' , '=', intval($caja))
                    ->when($tipo != 'TODOS', function($query) use ($tipo){return $query->where('dbo.Facturas.Tipo','=', $tipo);})
                    //->where('Tipo' , '=', $tipo)
                    ->orderBy('dbo.Caja.fecha')
                    ->get([
                        'Idfactura',
                        'Idpago',
                        'Monto',
                        'dbo.Caja.sucursal',
                        'dbo.Caja.fecha',
                        'dbo.Caja.operador',
                        'dbo.Caja.caja',
                        'descripcion',
                        'Tipo',
                        'Nro',
                        'Cupon'
                    ]);

        foreach ($data as $key ) {
            $key->Fecha_dia = date('d/m/Y', strtotime($key->fecha));
            }
        $data_caja = $data->groupBy('Fecha_dia')->map(function($fecha){
            return $fecha->groupBy('caja')->map(function($caja){
                return $caja->groupBy('descripcion');
            });
        });

        $context = "Desde ".date('d/m/Y', strtotime($desde))." - Hasta ".date('d/m/Y', strtotime($hasta)).
                    " Caja: ".$caja = $request->query()['caja']." Tipo: ".$tipo = $request->query()['tipo'].
                    " Medio de pago: ".$medio = $request->query()['medio'] ;

        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_medios_de_pago', compact('data_caja', 'context'));
                return $pdf->download('reporte-x-medios-de-pago.pdf');
            }

        return view('reports.venta_medios_de_pago', compact('data_caja', 'context'));;

    }

    public function getRemitos($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Remitos')
                ->join('dbo.DeTalleRemitos', 'dbo.Remitos.id', '=', 'dbo.DeTalleRemitos.IdRemito')
                ->join('dbo.Articulos', 'dbo.DeTalleRemitos.Codigo', '=', 'dbo.Articulos.Codigo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->where('dbo.Remitos.sucursal','=', 'Central')
                ->whereBetween('Fecha', [Carbon::now()->subDays(30) , Carbon::now()->addDay()])// 30 dias
                ->orderBy('Fecha')
                ->get(
                    ["dbo.DeTalleRemitos.id",
                    "dbo.Grupos.descripcion",
                    "Nro",
                    "Fecha",
                    "dbo.DeTalleRemitos.sucursal",
                    "dbo.DeTalleRemitos.caja",
                    "IdRemito",
                    "dbo.Articulos.Codigo",
                    "dbo.Articulos.Descripcion",
                    "PrecioxUn",
                    "Cantidad",
                    "Precio",
                    "Montoiva",
                    "dbo.Articulos.costo",
                    "dbo.Articulos.CostoD",
                    "dbo.Articulos.Costo",
                    "dbo.Articulos.L1",
                    "Grupo",
                    "IdProveedor",
                    "C_Stock",
                    "rentabilidad",
                    "marcas",
                    "oferta",
                    "umedida",
                    "modificado",
                    "ultmodif",
                    "dbo.Articulos.Descripcion",
                    "dbo.DeTalleRemitos.caja"]
                );

            foreach ($data as $key ) {
                    $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }

            $data_f_g = $data->groupBy('Fecha_dia')->map(function($fecha){
                    return $fecha->groupBy('Grupo');
            });

        if ($mode == 'pdf') {
               $pdf = PDF::loadView('reports.remitos', compact('data_f_g'));
                    return $pdf->download('reporte.pdf');
            }

        return view('reports.remitos', compact('data_f_g'));


    }

    public function getRemitosFiltered(Request $request){

        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        $grupo = $request->query()['grupo'];
        $data = DB::connection('sqlsrv')->table('dbo.Remitos')
                ->join('dbo.DeTalleRemitos', 'dbo.Remitos.id', '=', 'dbo.DeTalleRemitos.IdRemito')
                ->join('dbo.Articulos', 'dbo.DeTalleRemitos.Codigo', '=', 'dbo.Articulos.Codigo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->when($grupo != 1000, function($query) use ($grupo){return $query->where('dbo.Articulos.Grupo', $grupo);})
                ->whereBetween('Fecha', [$desde , $hasta])
                ->orderBy('Fecha')
                ->get(
                    ["dbo.DeTalleRemitos.id",
                    "dbo.Grupos.descripcion",
                    "Nro",
                    "Fecha",
                    "dbo.DeTalleRemitos.sucursal",
                    "dbo.DeTalleRemitos.caja",
                    "IdRemito",
                    "dbo.Articulos.Codigo",
                    "dbo.Articulos.Descripcion",
                    "PrecioxUn",
                    "Cantidad",
                    "Precio",
                    "Montoiva",
                    "dbo.Articulos.costo",
                    "dbo.Articulos.CostoD",
                    "dbo.Articulos.Costo",
                    "dbo.Articulos.L1",
                    "Grupo",
                    "IdProveedor",
                    "C_Stock",
                    "rentabilidad",
                    "marcas",
                    "oferta",
                    "umedida",
                    "modificado",
                    "ultmodif",
                    "dbo.Articulos.Descripcion",
                    "dbo.DeTalleRemitos.caja"]
                );

            foreach ($data as $key ) {
                    $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }

            $data_f_g = $data->groupBy('Fecha_dia')->map(function($fecha){
                    return $fecha->groupBy('Grupo');
            });


        if ($request->mode == 'pdf') {
                $pdf = PDF::loadView('reports.remitos', compact('data_f_g'));
                     return $pdf->download('reporte.pdf');
             }
        return view('reports.remitos', compact('data_f_g'));

    }
}
