<?php

namespace App\Http\Controllers\reports;

use App\Http\Controllers\RuntimeDatabaseController;
use App\Http\Controllers\Controller;
// use Barryvdh\DomPDF\PDF;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class VentaController extends Controller
{

    public function getSalesByDateOperatorGroup($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                ->join('dbo.Detalles', 'dbo.Facturas.id', '=', 'dbo.Detalles.IdFac')
                ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->where('dbo.Facturas.sucursal','=', 'Central')
                ->whereBetween('Fecha', [Carbon::now()->subDays(30) , Carbon::now()])
                ->orderBy('Operador')
                ->get(
                    ["dbo.Detalles.id",
                    "dbo.Grupos.descripcion",
                    "Nro",
                    "Fecha",
                    "dbo.Detalles.sucursal",
                    "Operador",
                    "dbo.Detalles.caja",
                    "IdFac",
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
                    "dbo.Detalles.caja"]
                );

            foreach ($data as $key ) {
                    $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }

            $data_f_o_g = $data->groupBy('Fecha_dia')->map(function($fecha){
                return $fecha->groupBy('Operador')->map(function($grupo){
                    return $grupo->groupBy('Grupo');
                });
            });;

        if ($mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_by_operator', compact('data_f_o_g'));
            return $pdf->download('reporte-x-operador-y-grupo.pdf');
        }
        return view('reports.venta_by_operator', compact('data_f_o_g'));
    }

    public function getSalesByDateOperatorGroupFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $caja = $request->query()['caja'];
        $grupo = $request->query()['grupo'];
        $operador = $request->query()['operador'];
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        //dd($request->query());

        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                ->join('dbo.Detalles', 'dbo.Facturas.id', '=', 'dbo.Detalles.IdFac')
                ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->when($caja != 'TODAS', function($query) use ($caja){return $query->where('dbo.Detalles.caja','=', $caja);})
                //->where('dbo.Detalles.caja','=', $caja)
                ->whereBetween('Fecha', [$desde , $hasta])
                ->when($operador != 'TODOS', function($query) use ($operador){return $query->where('dbo.Facturas.Operador', $operador);})
                //->where('dbo.Facturas.Operador','=', $operador)
                ->when($grupo != 1000, function($query) use ($grupo){return $query->where('dbo.Articulos.Grupo', $grupo);})
                //->where('dbo.Articulos.Grupo','=', $grupo)
                ->get(
                    ["dbo.Detalles.id", "dbo.Grupos.descripcion", "Nro",
                    "Fecha", "dbo.Detalles.sucursal", "Operador",
                    "dbo.Detalles.caja",  "IdFac", "dbo.Articulos.Codigo",
                    "dbo.Articulos.Descripcion", "PrecioxUn",  "Cantidad",
                    "Precio","Montoiva", "dbo.Articulos.costo",
                    "dbo.Articulos.CostoD", "dbo.Articulos.Costo", "dbo.Articulos.L1",
                    "Grupo","IdProveedor", "C_Stock",
                    "rentabilidad", "marcas","oferta", "umedida", "modificado",
                    "ultmodif", "dbo.Articulos.Descripcion","dbo.Detalles.caja"]
                );


            foreach ($data as $key ) {
                    $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }

            $data_f_o_g = $data->groupBy('Fecha_dia')->map(function($fecha){
                return $fecha->groupBy('Operador')->map(function($grupo){
                    return $grupo->groupBy('Grupo');
                });
            });;
        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_by_operator', compact('data_f_o_g'));
                return $pdf->download('reporte-x-operador-y-grupo.pdf');
            }

        return view('reports.venta_by_operator', compact('data_f_o_g'));
    }


    public function getSalesByDateGroup($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                ->join('dbo.Detalles', 'dbo.Facturas.id', '=', 'dbo.Detalles.IdFac')
                ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->where('dbo.Facturas.sucursal','=', 'Central')
                ->whereBetween('Fecha', [Carbon::now()->subDays(30) , Carbon::now()])
                ->orderBy('Fecha')
                //->limit(50)
                ->orderBy('Operador')
                ->get(
                    ["dbo.Detalles.id",
                    "dbo.Grupos.descripcion",
                    "Nro",
                    "Fecha",
                    "dbo.Detalles.sucursal",
                    "Operador",
                    "dbo.Detalles.caja",
                    "IdFac",
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
                    "dbo.Detalles.caja"]
                );

            foreach ($data as $key ) {
                    $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }
        $data_f_g = $data->groupBy('Fecha_dia')->map(function($fecha){
           return $fecha->groupBy('Grupo');
        });
        if ($mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_date_group', compact('data_f_g'));
            return $pdf->download('reporte-ventas-x-grupo.pdf');
        }
        return view('reports.venta_date_group', compact('data_f_g'));


    }

    //--------------------------------------------------------------
    public function getSalesByDateGroupFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $grupo = $request->query()['grupo'];
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
       //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        //$hasta = Carbon::now();
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                ->join('dbo.Detalles', 'dbo.Facturas.id', '=', 'dbo.Detalles.IdFac')
                ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->when($grupo != 1000, function($query) use ($grupo){return $query->where('dbo.Articulos.Grupo', $grupo);})
                //->where('dbo.Articulos.Grupo', '=', $grupo)
                ->whereBetween('Fecha', [$desde , $hasta])
                ->orderBy('Fecha')
                //->limit(50)
                ->get(
                    ["dbo.Detalles.id",
                    "dbo.Grupos.descripcion",
                    "Nro",
                    "Fecha",
                    "dbo.Detalles.sucursal",
                    "Operador",
                    "dbo.Detalles.caja",
                    "IdFac",
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
                    "dbo.Detalles.caja"]
                );

            foreach ($data as $key ) {
                    $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }
        $data_f_g = $data->groupBy('Fecha_dia')->map(function($fecha){
           return $fecha->groupBy('Grupo');
        });
        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_date_group', compact('data_f_g'));
            return $pdf->download('reporte-ventas-x-grupo.pdf');
        }
        //return $hasta;
        return view('reports.venta_date_group', compact('data_f_g'));


    }

//--------------------------------------------------------------------------------------
    public function getSalesByOperator($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                    //->join('dbo.Detalles', 'dbo.Facturas.id', '=', 'dbo.Detalles.IdFac')
                    //->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                    ->where('dbo.Facturas.sucursal','=', 'Central')
                    ->where('dbo.Facturas.Cancelada' , '=' , '0')
                    ->whereBetween('Fecha', [Carbon::now()->subDays(30) , Carbon::now()])
                    ->orderBy('Operador')
                    ->get();

        $data_caja_operador = $data->groupBy('Caja')->map(function($caja){

            return $caja->groupBy('Operador');
        });
        if ($mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_by_caja_operador', compact('data_caja_operador'));
                return $pdf->download('reporte-movimientos-caja.pdf');
            }

        //dd($data_caja_operador);
        return view('reports.venta_by_caja_operador', compact('data_caja_operador'));
    }

    public function getSalesByOperatorFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $operador = $request->query()['operador'];
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();

        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                    //->join('dbo.Detalles', 'dbo.Facturas.id', '=', 'dbo.Detalles.IdFac')
                    //->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                    ->where('dbo.Facturas.sucursal','=', 'Central')
                    ->where('dbo.Facturas.Cancelada' , '=' , '0')
                    ->whereBetween('Fecha', [$desde, $hasta])
                    ->when($operador != 'TODOS', function($query) use ($operador){return $query->where('dbo.Facturas.Operador', $operador);})
                    //->where('dbo.Facturas.Operador', '=', $operador)
                    ->get();

        $data_caja_operador = $data->groupBy('Caja')->map(function($caja){

            return $caja->groupBy('Operador');
        });
        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_by_caja_operador', compact('data_caja_operador'));
            return $pdf->download('reporte-ventas-x-grupo.pdf');
        }
        //dd($data_caja_operador);
        return view('reports.venta_by_caja_operador', compact('data_caja_operador'));
    }

    public function getSalesByHour($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                    ->join('dbo.Detalles','dbo.Detalles.IdFac', '=', 'dbo.Facturas.idorig')
                    ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                    ->where('dbo.Facturas.sucursal','=', 'Central')
                    ->where('dbo.Facturas.Cancelada' , '=' , '0')
                    ->whereBetween('Fecha', [Carbon::now()->subDays(30) ,Carbon::now()])
                    ->orderBy('Fecha')
                    ->limit(1000)
                    ->get([
                        "dbo.Detalles.id",
                    "Nro",
                    "Fecha",
                    "dbo.Detalles.sucursal",
                    "Operador",
                    "dbo.Detalles.caja",
                    "IdFac",
                    "dbo.Articulos.Codigo",
                    "dbo.Articulos.Descripcion",
                    "PrecioxUn",
                    "Cantidad",
                    "Precio",
                    "Montoiva",
                    "dbo.Articulos.costo",
                    "dbo.Articulos.CostoD",
                    "dbo.Articulos.Costo",
                    "IdProveedor",
                    "C_Stock",
                    "oferta",
                    "umedida",
                    "dbo.Articulos.Descripcion",
                    "dbo.Detalles.caja"
                    ]);

            foreach ($data as $venta) {
                $venta->hora = intval(date('H', strtotime($venta->Fecha)));
            }

            $data_hour = $data->groupBy('caja')->map(function($caja){
                return $caja->groupBy('hora');
            });
        if ($mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_by_hora', compact('data_hour'));
                return $pdf->download('reporte-movimientos-caja.pdf');
            }

        return view('reports.venta_by_hora', compact('data_hour'));
    }

    public function getSalesByHourFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                    ->join('dbo.Detalles','dbo.Detalles.IdFac', '=', 'dbo.Facturas.idorig')
                    ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                    ->where('dbo.Facturas.sucursal','=', 'Central')
                    ->where('dbo.Facturas.Cancelada' , '=' , '0')
                    ->whereBetween('Fecha', [$desde, $hasta])
                    ->orderBy('Fecha')
                    ->limit(1000)
                    ->get([
                        "dbo.Detalles.id",
                    "Nro",
                    "Fecha",
                    "dbo.Detalles.sucursal",
                    "Operador",
                    "dbo.Detalles.caja",
                    "IdFac",
                    "dbo.Articulos.Codigo",
                    "dbo.Articulos.Descripcion",
                    "PrecioxUn",
                    "Cantidad",
                    "Precio",
                    "Montoiva",
                    "dbo.Articulos.costo",
                    "dbo.Articulos.CostoD",
                    "dbo.Articulos.Costo",
                    "IdProveedor",
                    "C_Stock",
                    "oferta",
                    "umedida",
                    "dbo.Articulos.Descripcion",
                    "dbo.Detalles.caja"
                    ]);

            foreach ($data as $venta) {
                $venta->hora = intval(date('H', strtotime($venta->Fecha)));
            }

            $data_hour = $data->groupBy('caja')->map(function($caja){
                return $caja->groupBy('hora');
            });

        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_by_hora', compact('data_hour'));
                return $pdf->download('reporte-movimientos-caja.pdf');
            }
        return view('reports.venta_by_hora', compact('data_hour'));
    }

    public function getSalesRanking($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                    ->join('dbo.Detalles','dbo.Detalles.IdFac', '=', 'dbo.Facturas.idorig')
                    ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                    ->where('dbo.Facturas.Cancelada' , '=' , '0')
                    ->whereBetween('Fecha', [Carbon::now()->subDays(30) , Carbon::now()])
                    //->limit(100)
                    ->get();

        $data_groups = $data->groupBy('Grupo')->map(function($grupo){
            return $grupo->groupBy('Descripcion')->sortBy(function($desc){
                return count($desc);
            });
        });
        if ($mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_ranking', compact('data_groups'));
                return $pdf->download('reporte-movimientos-caja.pdf');
            }

        return view('reports.venta_ranking', compact('data_groups'));
    }

    public function getSalesRankingFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                    ->join('dbo.Detalles','dbo.Detalles.IdFac', '=', 'dbo.Facturas.idorig')
                    ->join('dbo.Articulos', 'dbo.Detalles.Codigo', '=', 'dbo.Articulos.Codigo')
                    ->where('dbo.Facturas.Cancelada' , '=' , '0')
                    ->whereBetween('Fecha', [$desde, $hasta])
                    ->limit(100)
                    ->get();

        $data_groups = $data->groupBy('Grupo')->map(function($grupo){
            return $grupo->groupBy('Descripcion')->sortBy(function($desc){
                return count($desc);
            });
        });
        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_ranking', compact('data_groups'));
                return $pdf->download('reporte-movimientos-caja.pdf');
            }
        return view('reports.venta_ranking', compact('data_groups'));
    }

    public function getSalesByIva(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                ->join('dbo.Detalles',function($join){
                    $join->on('dbo.Facturas.idorig', '=', 'dbo.Detalles.IdFac')
                        ->on('dbo.Facturas.caja', '=', 'dbo.Detalles.caja')
                        ;})
                ->join('dbo.Clientes', 'dbo.Clientes.id', '=', 'dbo.Facturas.IdCliente')
                ->whereBetween('dbo.Facturas.Fecha', [Carbon::now()->subDays(30) , Carbon::now()])
                ->orderBy('dbo.Facturas.Fecha')
                ->select('dbo.Facturas.Fecha', 'dbo.Facturas.sucursal', 'dbo.Facturas.Nro',
                         'dbo.Facturas.Total', 'dbo.Detalles.Iva', 'dbo.Detalles.Montoiva',
                        'dbo.Facturas.caja', 'dbo.Detalles.ImpInt', 'dbo.Clientes.Localidad',
                        'dbo.Facturas.Tipo', 'dbo.Clientes.Nombre', 'dbo.Clientes.Cuit', 'dbo.Clientes.DNI',
                        'dbo.Clientes.provincia', 'dbo.Facturas.Neto', 'dbo.Detalles.Precio', 'dbo.Detalles.Cantidad',
                        'dbo.Detalles.Codigo'
                )->get();

            foreach ($data as $key ) {
                $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }
            $data_total = $data->groupBy('Fecha_dia')->map(function($caja){
                return $caja->groupBy('caja')->map(function($fecha){
                    return $fecha->groupBy('Tipo')->map(function($tipo){
                        return $tipo->groupBy('Nro')->map(function($nro){

                                $iva21 = 0;
                                $iva105 = 0;
                                $iva5 = 0;
                                $iva27 = 0;
                                $neto_ex = 0;
                                $neto21 = 0;
                                $neto105 = 0;
                                $neto5 = 0;
                                $neto27 = 0;
                                $item['fecha'] = date_formatted($nro->first()->Fecha);
                                $item['caja'] = $nro->first()->caja;
                                $item['sucursal'] = $nro->first()->sucursal;
                                $item['tipo'] = $nro->first()->Tipo;
                                $item['nro'] = $nro->first()->Nro;
                                $item['cuit'] = $nro->first()->Cuit;
                                $item['razon'] = $nro->first()->Nombre;
                                $item['total'] = $nro->first()->Total;
                                $item['imp_int'] = $nro->first()->ImpInt;
                                $item['provincia'] = $nro->first()->provincia;

                                foreach ($nro as $reg) {
                                    if ($reg->Iva == 21) {
                                         $iva21 += $reg->Montoiva;
                                         $neto21 += $reg->Precio * $reg->Cantidad;
                                    }
                                    if ($reg->Iva == 10.5) {
                                        $iva105 += $reg->Montoiva;
                                        $neto105 += $reg->Precio * $reg->Cantidad;
                                   }
                                   if ($reg->Iva == 5) {
                                    $iva5 += $reg->Montoiva;
                                    $neto5 += $reg->Precio * $reg->Cantidad;
                                    }
                                    if ($reg->Iva == 27) {
                                        $iva27 += $reg->Montoiva;
                                        $neto27 += $reg->Precio * $reg->Cantidad;
                                        }
                                    if ($reg->Iva == 0) {

                                        $neto_ex += $reg->Precio * $reg->Cantidad;
                                        }
                                }
                                $item['totales'] = [
                                    'iva21' => $iva21,
                                    'iva105' => $iva105,
                                    'iva5' => $iva5,
                                    'iva27' => $iva27,
                                    'iva_total' => $iva21+$iva27+$iva105+$iva5,
                                    'neto21' => $neto21-$iva21,
                                    'neto105' => $neto105-$iva105,
                                    'neto27' => $neto27-$iva27,
                                    'neto5' => $neto5-$iva5,
                                    'neto_exento' => $neto_ex

                                ];
                                return $item;
                            });
                    });
                });
            });

        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_iva', compact('data_total'));
                return $pdf->download('reporte-iva.pdf');
            }
        return view('reports.venta_iva', compact('data_total'));
    }

    public function getSalesByIvaFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        $caja = $request->query()['caja'];

        $data = DB::connection('sqlsrv')->table('dbo.Facturas')
                ->join('dbo.Detalles',function($join){
                    $join->on('dbo.Facturas.idorig', '=', 'dbo.Detalles.IdFac')
                        ->on('dbo.Facturas.caja', '=', 'dbo.Detalles.caja')
                        ;})
                ->join('dbo.Clientes', 'dbo.Clientes.id', '=', 'dbo.Facturas.IdCliente')
                ->whereBetween('dbo.Facturas.Fecha', [$desde, $hasta])
                ->when($caja != 'TODAS', function($query) use ($caja){return $query->where('dbo.Facturas.caja','=', $caja);})
                //->where('dbo.Facturas.caja', '=', $caja)
                ->limit(500)
                ->orderBy('dbo.Facturas.Fecha')
                ->select('dbo.Facturas.Fecha', 'dbo.Facturas.sucursal', 'dbo.Facturas.Nro',
                         'dbo.Facturas.Total', 'dbo.Detalles.Iva', 'dbo.Detalles.Montoiva',
                        'dbo.Facturas.caja', 'dbo.Detalles.ImpInt', 'dbo.Clientes.Localidad',
                        'dbo.Facturas.Tipo', 'dbo.Clientes.Nombre', 'dbo.Clientes.Cuit', 'dbo.Clientes.DNI',
                        'dbo.Clientes.provincia', 'dbo.Facturas.Neto', 'dbo.Detalles.Precio', 'dbo.Detalles.Cantidad',
                        'dbo.Detalles.Codigo'
                )->get();

            foreach ($data as $key ) {
                $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
                }
            $data_total = $data->groupBy('Fecha_dia')->map(function($caja){
                return $caja->groupBy('caja')->map(function($fecha){
                    return $fecha->groupBy('Tipo')->map(function($tipo){
                        return $tipo->groupBy('Nro')->map(function($nro){
                                $iva21 = 0;
                                $iva105 = 0;
                                $iva5 = 0;
                                $iva27 = 0;
                                $neto_ex = 0;
                                $neto21 = 0;
                                $neto105 = 0;
                                $neto5 = 0;
                                $neto27 = 0;
                                $item['fecha'] = date_formatted($nro->first()->Fecha);
                                $item['caja'] = $nro->first()->caja;
                                $item['sucursal'] = $nro->first()->sucursal;
                                $item['tipo'] = $nro->first()->Tipo;
                                $item['nro'] = $nro->first()->Nro;
                                $item['cuit'] = $nro->first()->Cuit;
                                $item['razon'] = $nro->first()->Nombre;
                                $item['total'] = $nro->first()->Total;
                                $item['imp_int'] = $nro->first()->ImpInt;
                                $item['provincia'] = $nro->first()->provincia;

                                foreach ($nro as $reg) {
                                    if ($reg->Iva == 21) {
                                         $iva21 += $reg->Montoiva;
                                         $neto21 += $reg->Precio * $reg->Cantidad;
                                    }
                                    if ($reg->Iva == 10.5) {
                                        $iva105 += $reg->Montoiva;
                                        $neto105 += $reg->Precio * $reg->Cantidad;
                                   }
                                   if ($reg->Iva == 5) {
                                    $iva5 += $reg->Montoiva;
                                    $neto5 += $reg->Precio * $reg->Cantidad;
                                    }
                                    if ($reg->Iva == 27) {
                                        $iva27 += $reg->Montoiva;
                                        $neto27 += $reg->Precio * $reg->Cantidad;
                                        }
                                    if ($reg->Iva == 0) {

                                        $neto_ex += $reg->Precio * $reg->Cantidad;
                                        }
                                }
                                $item['totales'] = [
                                    'iva21' => $iva21,
                                    'iva105' => $iva105,
                                    'iva5' => $iva5,
                                    'iva27' => $iva27,
                                    'iva_total' => $iva21+$iva27+$iva105+$iva5,
                                    'neto21' => $neto21-$iva21,
                                    'neto105' => $neto105-$iva105,
                                    'neto27' => $neto27-$iva27,
                                    'neto5' => $neto5-$iva5,
                                    'neto_exento' => $neto_ex
                                ];
                                return $item;
                            });
                    });
                });
            });
        //return $data_total;
        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.venta_iva', compact('data_total'))->setPaper('a4', 'landscape');
                return $pdf->download('reporte-iva.pdf');
            }

        return view('reports.venta_iva', compact('data_total'));
    }
}


//https://cloud.dcrams.com.ar/reports/venta_medios_de_pago/filtered?hasta=Fri%20Mar%2012%202021%2000:00:00%20GMT-0300%20(hora%20est%C3%A1ndar%20de%20Argentina)&desde=Mo
