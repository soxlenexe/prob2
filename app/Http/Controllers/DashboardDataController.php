<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardDataController extends Controller
{
    public function ventas_dia(Request $request){
        RuntimeDatabaseController::setEnviron();
        $desde = Carbon::now()->subDay();
        $hasta = Carbon::now();
        $facturas = DB::connection('sqlsrv')->table('dbo.Facturas')
                    ->whereBetween('Fecha', [$desde, $hasta]  )
                    ->get('pago');
        $remitos = DB::connection('sqlsrv')->table('dbo.Remitos')
                    ->whereBetween('Fecha', [$desde, $hasta]  )
                    ->get('Total');
        ///---------------------- MESES ----
        // $facturas_meses = DB::connection('sqlsrv')->table('dbo.Facturas')
        //             ->whereBetween('Fecha', [Carbon::now()->subMonths(6), Carbon::now()]  )
        //             ->get(['pago', 'Fecha']);

        // $remitos_meses = DB::connection('sqlsrv')->table('dbo.Remitos')
        //             ->whereBetween('Fecha', [Carbon::now()->subMonths(6), Carbon::now()]  )
        //             ->get('Total', 'Fecha');
        // $ventas_meses = $facturas_meses->merge($remitos_meses);
        $facturas_meses = DB::connection('sqlsrv')->select("
            SELECT MONTH(Fecha) [month], SUM(pago) mensual FROM dbo.Facturas
            WHERE Fecha IS NOT NULL AND YEAR(Fecha) = 2021
            GROUP BY MONTH(Fecha)
            ORDER BY [month]
        ");
        $remitos_meses = DB::connection('sqlsrv')->select("
            SELECT MONTH(Fecha) [month], SUM(Total) mensual FROM dbo.Remitos
            WHERE Fecha IS NOT NULL AND YEAR(Fecha) = 2021
            GROUP BY MONTH(Fecha)
            ORDER BY [month]
        ");
        // $remitos_meses = DB::connection('sqlsrv')->select("
        //     SELECT MONTH(dbo.Facturas.Fecha) [month], SUM(pago) facturas FROM dbo.Facturas
        //     WHERE Fecha IS NOT NULL AND YEAR(Fecha) = 2021
        //     GROUP BY MONTH(Fecha)
        //     UNION
		// 	SELECT MONTH(dbo.Remitos.Fecha) [month_r], SUM(Total) remitos FROM dbo.Remitos
        //     GROUP BY MONTH(Fecha)
        //     ORDER BY [month]
        // ");

        //$ventas_meses =  array_merge($facturas_meses, $remitos_meses);
        //-----------------------------------------------

        $medios = DB::connection('sqlsrv')->table('dbo.Caja')
                    ->join('dbo.Medios', 'dbo.Caja.Idpago', "=", "dbo.Medios.numero")
                    ->whereBetween('dbo.Caja.fecha',[$desde , $hasta])
                    ->get([
                        'descripcion'
                    ]);
        $ranking_facturas = DB::connection('sqlsrv')->table('dbo.Facturas')
                        ->join('dbo.DeTalles', 'dbo.DeTalles.IdFac' , '=' , 'dbo.Facturas.idorig')
                        ->whereBetween('dbo.Facturas.Fecha', [$desde, $hasta])
                        ->get('dbo.DeTalles.Descripcion');

        $ranking_remitos= DB::connection('sqlsrv')->table('dbo.Remitos')
                        ->join('dbo.DeTalleRemitos', 'dbo.DeTalleRemitos.IdRemito' , '=' , 'dbo.Remitos.id')
                        ->whereBetween('dbo.Remitos.Fecha', [$desde, $hasta])
                        ->get('dbo.DeTalleRemitos.Descripcion');

        $prod_vendidos = $ranking_facturas->merge($ranking_remitos) ;
        $ranking = $prod_vendidos->groupBy('Descripcion')->map(function($prod){
            return count($prod);
        });

        $medios_agrupados = $medios->groupBy('descripcion');
        $ventas_dia = [
            'facturas' => $facturas,
            'remitos' => $remitos,
            'medios' => $medios_agrupados,
            'ranking' => $ranking,
            'six_months_r' => $remitos_meses,
            'six_months_f' => $facturas_meses
        ];

        return response()->json($ventas_dia);
    }
}
