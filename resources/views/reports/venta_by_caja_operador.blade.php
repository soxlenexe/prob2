
@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">

<div class="cont">
    <div class="title-top sticky-top report-title">
        <h2 class="">Ventas por operador</h2>
    </div>

     <div>
        <p class="report-context"><i class="pi pi-info-circle"></i>   Datos correspondientes a los ultimos 30 dias.</p>
    </div>
    @if (count($data_caja_operador) == 0)
        <div class="table-footer text-center">No hay registros disponibles</div>
     @endif
    @foreach ($data_caja_operador as $caja)
        <div class="title">
           <span class="subtitle-1"> Sucursal: <strong >{{$caja->first()->first()->sucursal}}</strong> </span>
        </div>
        <div class="title">
            <span class="subtitle-2"> Caja: <strong >{{$caja->first()->first()->caja}}</strong> </span>
         </div>

        @php
            $ventas_operador = 0;
            $total_caja = 0;
        @endphp
        <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" >Operador</th>
                        <th scope="col" class="text-right">Monto</th>
                    </tr>
                </thead>
                <tbody>

        @foreach ($caja as $item)
            @foreach ($item as $venta)
                @php
                    $ventas_operador += $venta->Total
                @endphp

            @endforeach
                    <tr>
                        <td>{{$venta->Operador}}</td>
                        <td>{{money($ventas_operador)}}</td>
                    </tr>
                    @php
                        $total_caja += $ventas_operador;
                        $ventas_operador = 0;
                    @endphp

        @endforeach
                </tbody>
                <tfoot class="table-footer">
                    <tr>
                        <td class="">Total Caja</td>
                        <td class="pr-4 text-right"><b>$ {{money($total_caja)}}</b> </td>

                    </tr>
                </tfoot>
            </table>


    @endforeach
    @if (count($data_caja_operador) != 0)


    <div clas="table-footer" >
            <table class="table table-striped table-footer" >
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-footer">
                        <td>
                            Total Sucursal
                        </td>
                        <td>
                            <b>$ {{money($total_caja)}}</b>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
    @endif
</div>
