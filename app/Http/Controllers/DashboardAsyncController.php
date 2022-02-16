<?php

namespace App\Http\Controllers;

use App\Models\remote\Articulo;
use App\Models\remote\Caja;
use App\Models\remote\DetalleFactura;
use App\Models\remote\DetalleRemito;
use App\Models\remote\Factura;
use App\Models\remote\Remito;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardAsyncController extends Controller
{
    public function formaDePagoValorizada($dns){
        RuntimeDatabaseController::setEnviron($dns);
        $ventas_mdp = Caja::whereBetween('Fecha', [Carbon::now()->subMonths(1), Carbon::now()])
                            ->where('motivo', 'Ventas')
                            ->join('dbo.medios', 'dbo.medios.numero', 'dbo.Caja.Idpago')
                            ->get(['Idpago', 'descripcion'])->groupBy('descripcion')->map(function($c){return count($c);});
        return response()->json( ['medios' => $ventas_mdp]);
    }

    public function ventaHorariaValorizada($dns){
        RuntimeDatabaseController::setEnviron($dns);
        $facturas = Factura::whereBetween('dbo.Facturas.Fecha',[Carbon::now()->subMonths(1), Carbon::now()] )
                ->get([ 'dbo.Facturas.Total','dbo.Facturas.Fecha'])
                ->groupBy(function($d){ return Carbon::parse($d->Fecha)->format('H');})->map(function($group){return $group->sum('Total');});

        $remitos = Remito::whereBetween('dbo.Remitos.Fecha',[Carbon::now()->subMonths(1), Carbon::now()] )
                    ->get([ 'dbo.Remitos.Total','dbo.Remitos.Fecha'])
                    ->groupBy(function($d){ return Carbon::parse($d->Fecha)->format('H');})->map(function($group){return $group->sum('Total');});

       return response()->json(['ventas_facturas' => $facturas, 'ventas_remitos' => $remitos]);
    }

    public function ventaPorOperadorValorizada($dns){
        RuntimeDatabaseController::setEnviron($dns);
        $facturas = Factura::whereBetween('Fecha', [Carbon::now()->subMonths(1), Carbon::now()])->get(['Total','Operador'])->groupBy('Operador');
        $remitos = Remito::whereBetween('Fecha', [Carbon::now()->subMonths(1), Carbon::now()])->sum('Total');
        $totales = [['total' => $remitos, 'operador' => 'sin operador']];
         foreach ($facturas as $group) {
         array_push($totales,['total' => $group->sum('Total'), 'operador' => $group[0]->Operador]);
        }
        return response()->json($totales);//ok, 2.5 segundos
    }

    public function rankingArticulosVendidos($dns){
        RuntimeDatabaseController::setEnviron($dns);
        $remitos = Remito::whereBetween('Fecha', [Carbon::now()->subMonths(1), Carbon::now()])
                    ->join('dbo.DeTalleRemitos', 'dbo.DeTalleRemitos.IdRemito', 'dbo.Remitos.id')
                    ->get(['Codigo', 'Descripcion', 'Cantidad'])
                    ->groupBy('Descripcion')
                    ->map(
                            function($c){
                                return $c->sum('Cantidad');
                        })
                        ->toArray();
        arsort($remitos);
        $facturas = Factura::whereBetween('Fecha', [Carbon::now()->subMonths(1), Carbon::now()])
                    ->join('dbo.DeTalles', 'dbo.DeTalles.IdFac', 'dbo.Facturas.idorig')
                    ->get(['Codigo', 'Descripcion', 'Cantidad'])
                    ->groupBy('Descripcion')
                    ->map(
                        function($c){
                            return $c->sum('Cantidad');
                    })
                        ->toArray();

        arsort($facturas);
        return response()->json(['remitos' => array_slice($remitos,0,5), 'facturas' => array_slice($facturas,0,5)]);

    }

    public function articulosNoVendidos($dns){
        return ;
    }

    public function evolucionDeVentas($dns) {
       RuntimeDatabaseController::setEnviron($dns);
       $facturas = Factura::whereBetween('dbo.Facturas.Fecha',[Carbon::now()->subMonths(12), Carbon::now()] )
                ->get([ 'dbo.Facturas.Total','dbo.Facturas.Fecha'])
                ->groupBy(function($date){ return Carbon::parse($date->Fecha)->format('M');})->map(function($group){return $group->sum('Total');});

        $remitos = Remito::whereBetween('dbo.Remitos.Fecha',[Carbon::now()->subMonths(12), Carbon::now()] )
                ->get([ 'dbo.Remitos.Total','dbo.Remitos.Fecha'])
                ->groupBy(function($date){ return Carbon::parse($date->Fecha)->format('M');})->map(function($group){return $group->sum('Total');});

       return response()->json(['evolucion_facturas' => $facturas, 'evolucion_remitos' => $remitos]);
    }

    public function ventasTotales($dns){
        RuntimeDatabaseController::setEnviron($dns);
        $facturas = Factura::whereBetween('Fecha', [Carbon::now()->subMonths(1), Carbon::now()])->sum('Total');
        $remitos = Remito::whereBetween('Fecha', [Carbon::now()->subMonths(1), Carbon::now()])->sum('Total');
        return response()->json(['facturas' => $facturas, 'remitos' => $remitos, 'total_ventas' => $facturas+$remitos]);//2.5 segundos
    }

    public function ventasTotalesAnterior($dns){
        RuntimeDatabaseController::setEnviron($dns);
        $facturas = Factura::whereBetween('Fecha', [Carbon::now()->subMonths(2), Carbon::now()->subMonth()])->sum('Total');
        $remitos = Remito::whereBetween('Fecha', [Carbon::now()->subMonths(2), Carbon::now()->subMonth()])->sum('Total');
        return response()->json(['total_ventas_anterior' => $facturas+$remitos, 'dns' => $dns]);//2.5 segundos
    }

    public function ventasDelDia($dns){//ok
        RuntimeDatabaseController::setEnviron($dns);
        $remitos = Remito::whereBetween('Fecha', [Carbon::today()->subHours(3), Carbon::now()])->get('Total');
        $facturas = Factura::whereBetween('Fecha', [Carbon::today(), Carbon::now()])->get('Total');
        $ventas_dia = $remitos->sum('Total') + $facturas->sum('Total');
        $cant_comprobantes = $remitos->count() + $facturas->count();


        return response()->json([
            'ventas_dia' => $ventas_dia,
            'cant_comprobantes' => $cant_comprobantes
        ]);
    }

    public function getRawData($dns){
        RuntimeDatabaseController::setEnviron($dns);
        $remitos = Remito::all();
        $facturas = Factura::all();

        return response()->json(['facturas' => $facturas, 'remitos' => $remitos]);
    }
}
