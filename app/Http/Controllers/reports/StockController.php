<?php

namespace App\Http\Controllers\reports;

use App\Http\Controllers\Controller;
use App\Http\Controllers\RuntimeDatabaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Barryvdh\DomPDF\Facade as PDF;

class StockController extends Controller
{

    public function getStockByGroup($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $grupos = DB::connection('sqlsrv')->select("select * from dbo.Grupos");
        $data = DB::connection('sqlsrv')->table('dbo.Articulos')
                ->join('dbo.StockSuc' , 'dbo.Articulos.Codigo',  '=', 'dbo.StockSuc.Articulo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->where('dbo.StockSuc.Stock', '<>', 0)
                ->orderBy('dbo.Grupos.descripcion')
                ->get(

                );

        $data_by_groups = $data->groupBy('descripcion');
        if ($mode == 'pdf') {
            $pdf = PDF::loadView('reports.reporte_base', compact('data_by_groups', 'grupos'));
                return $pdf->download('reporte.pdf');
         }
        return view('reports.reporte_base', compact('data_by_groups', 'grupos'));

    }

    public function getStockByGroupFiltered(request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $grupo = $request->query()['grupo'];
        $grupos = DB::connection('sqlsrv')->select("select * from dbo.Grupos");
        $data = DB::connection('sqlsrv')->table('dbo.Articulos')
                ->join('dbo.StockSuc' , 'dbo.Articulos.Codigo',  '=', 'dbo.StockSuc.Articulo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', '=', 'dbo.Grupos.id')
                ->when($grupo != 1000, function($query) use ($grupo){return $query->where('dbo.Grupos.id', $grupo);})
                //->where('dbo.Grupos.id', '=', $grupo)
                ->orderBy('dbo.Articulos.Descripcion')
                ->get();

        $data_by_groups = $data->groupBy('descripcion');
        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.reporte_base', compact('data_by_groups', 'grupos'));
                 return $pdf->download('reporte-stock-x-grupos.pdf');
         }
        return view('reports.reporte_base', compact('data_by_groups', 'grupos'));
    }


    public function getStockByProvider($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        try {
            $data = DB::connection('sqlsrv')->table('dbo.Articulos')
                    ->join('dbo.StockSuc', 'dbo.Articulos.Codigo' , 'dbo.StockSuc.Articulo')
                    ->join('dbo.Grupos', 'dbo.Articulos.Grupo', 'dbo.Grupos.id')
                    ->join('dbo.Proveedores', 'dbo.Articulos.IdProveedor', 'dbo.Proveedores.id')
                    ->where('dbo.StockSuc.Stock', '>', 0)
                    ->whereBetween('dbo.Articulos.modificado',[Carbon::now()->subDays(30) ,Carbon::now()])//[]
                    ->orderBy('dbo.Proveedores.Nombre')
                    ->get([
                        "Codigo",
                        "dbo.Articulos.Descripcion","CostoD","Costo", "L1", "L2","L3", "LD","Grupo","PtoPed",
                        "IdProveedor", "cantpack", "C_Stock", "Iva", "Compuesto","UltCompra", "CantMax","viajeremis",
                        "rentabilidad", "marcas", "modificado", "Articulo", "Sucursal","Stock", "dbo.grupos.descripcion",
                        "Nombre", "RespIva", "Direccion", "saldo", "idprov"]);

            $chunks = $data->groupBy('Nombre')->map(function($nombre){
                return $nombre->groupBy('descripcion');
            });

            if ($mode == 'pdf') {
                $pdf = PDF::loadView('reports.stock_by_provider', compact('chunks'));
                    return $pdf->download('reporte-stock-x-grupos.pdf');
            }

            return view('reports.stock_by_provider', compact('chunks'));

        } catch (\Throwable $th) {
            return view('errors.server_error');

        }

}
    public function getStockByProviderFiltered(Request $request){

        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        $proveedor = $request->proveedor;///
        $data = DB::connection('sqlsrv')->table('dbo.Articulos')
                ->join('dbo.StockSuc', 'dbo.Articulos.Codigo' , 'dbo.StockSuc.Articulo')
                ->join('dbo.Grupos', 'dbo.Articulos.Grupo', 'dbo.Grupos.id')
                ->join('dbo.Proveedores', 'dbo.Articulos.IdProveedor', 'dbo.Proveedores.id')
                ->where('dbo.StockSuc.Stock', '>', 0)
                ->when($proveedor != 'TODOS', function($query) use ($proveedor){return $query->where('dbo.Proveedores.Nombre', $proveedor);})
                ->whereBetween('dbo.Articulos.modificado', [$desde, $hasta])
                ->orderBy('dbo.Proveedores.Nombre')
                ->get([
                    "Codigo",
                    "dbo.Articulos.Descripcion","CostoD","Costo", "L1", "L2","L3", "LD","Grupo","PtoPed",
                    "IdProveedor", "cantpack", "C_Stock", "Iva", "Compuesto","UltCompra", "CantMax","viajeremis",
                    "rentabilidad", "marcas", "modificado", "Articulo", "Sucursal","Stock", "dbo.grupos.descripcion",
                    "Nombre", "RespIva", "Direccion", "saldo", "idprov"]);
            $chunks = $data->groupBy('descripcion')->map(function($nombre){
                return $nombre->groupBy('Nombre');
            });

        if ($request->mode == 'pdf') {
            $pdf = PDF::loadView('reports.stock_by_provider', compact('chunks'));
                 return $pdf->download('reporte-stock-x-grupos.pdf');
         }
         //https://back-office.test/reports/stock_by_proveedor/filtered?hasta=Tue%20Mar%2009%202021%2000:00:00%20GMT-0300%20(hora%20est%C3%A1ndar%20de%20Argentina)&desde=Wed%20Mar%2003%202021%2000:00:00%20GMT-0300%20(hora%20est%C3%A1ndar%20de%20Argentina)&caja=TODAS&tipo=TODOS&grupo=1000&operador=Supervisor&medio=VISA&dns=194.163.145.107&mode=pdf

        return view('reports.stock_by_provider', compact('chunks'));

}
    public function getMovStock($dns, $mode){
        RuntimeDatabaseController::setEnviron(user_data($dns)->data['dns']);
        $data = DB::connection('sqlsrv')->table('dbo.MovStock')
            ->join('dbo.Articulos', 'dbo.MovStock.Codigo' , '=', 'dbo.Articulos.Codigo')
            ->join('dbo.StockSuc', 'dbo.MovStock.Codigo', '=' , 'dbo.StockSuc.Articulo')
            //->where('dbo.MovStock.sucursal', 'Central')
            ->where('dbo.MovStock.cantidad', '>', 0)
            ->whereBetween('Fecha', [Carbon::now()->subDays(30) ,Carbon::now()])
            ->orderBy('Fecha')
            ->get(['Fecha',
                'dbo.Articulos.Descripcion',
                'Cantidad',
                'dbo.Articulos.Codigo',
                'dbo.MovStock.Sucursal',
                'Detalle',
                'NroDoc',
                'Documento',
                'Stock'
                ]);
            foreach ($data as $key ) {
                $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
            }
            $dat = collect($data);
            $chunked_data = $dat->chunkWhile(function ($value, $key, $chunk){
                return $value->Fecha_dia === $chunk->last()->Fecha_dia;
            });
            $data = $chunked_data->all();

        if ($mode == 'pdf') {
            $pdf = PDF::loadView('reports.movstovk_base', compact('data'));
                 return $pdf->download('reporte-movimientos de stock.pdf');
         }

        return view('reports.movstovk_base', compact('data'));
    }

    public function getMovStockFiltered(Request $request){
        RuntimeDatabaseController::setEnviron(user_data($request->dns)->data['dns']);
        $desde = date('m/d/Y', strtotime(Str::before($request->query()['desde'], '(')));
        //$hasta = date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '(')));
        $hasta = Carbon::make(date('m/d/Y', strtotime(Str::before($request->query()['hasta'], '('))))->addDay();
        $data = DB::connection('sqlsrv')->table('dbo.MovStock')
            ->join('dbo.Articulos', 'dbo.MovStock.Codigo' , '=', 'dbo.Articulos.Codigo')
            ->join('dbo.StockSuc', 'dbo.MovStock.Codigo', '=' , 'dbo.StockSuc.Articulo')
            ->where('dbo.MovStock.cantidad', '>', 0)
            ->whereBetween('Fecha', [$desde , $hasta])
            ->orderBy('Fecha')
            ->get(['Fecha',
                'dbo.Articulos.Descripcion',
                'Cantidad',
                'dbo.Articulos.Codigo',
                'dbo.MovStock.Sucursal',
                'Detalle',
                'NroDoc',
                'Documento',
                'Stock'
                ]);
            foreach ($data as $key ) {
                $key->Fecha_dia = date('d/m/Y', strtotime($key->Fecha));
            }
            $dat = collect($data);
            $chunked_data = $dat->chunkWhile(function ($value, $key, $chunk){
                return $value->Fecha_dia === $chunk->last()->Fecha_dia;
            });
            $data = $chunked_data->all();
        if ($request->mode == 'pdf') {
                $pdf = PDF::loadView('reports.movstovk_base', compact('data'));
                     return $pdf->download('movimiento-stock.pdf');
             }
        return view('reports.movstovk_base', compact('data'));
    }
}
