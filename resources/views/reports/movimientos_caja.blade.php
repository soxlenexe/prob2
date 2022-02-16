@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<div class="container">

    <div class="title-top sticky-top mt-0 pb-1 report-title" >
        <h2>Movimientos de Caja</h2>
        <div>
            <p  class="report-context"><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @if (count($data_caja) == 0)
        <div class="table-footer text-center">No hay registros disponibles</div>
    @else
     @php
         $total_reporte = 0;
     @endphp

    @foreach ($data_caja as $caja)
    @php
        $total_caja = 0;
    @endphp

    <div class="title">
        <span class="subtitle-2"> Caja: <strong class="mr-5">{{$caja->first()->first()->caja}}</strong> </span>
     </div>
        @foreach ($caja as $item)
        <div class="title">
            <span class="subtitle-3" > Operador: <strong>{{$item->first()->operador}}</strong> </span>
        </div>
         <table class="table table-striped mb-0">
            <thead>
                <tr>
                    <th scope="col" >Hora</th>
                    <th scope="col">Turno</th>
                    <th scope="col">Motivo</th>
                    <th scope="col" >Medio de Pago</th>
                    <th scope="col" class="text-right pr-4">Monto</th>


                </tr>
            </thead>
            <tbody>
                @php
                    $total_operador = 0;
                @endphp
            @foreach ($item as $reg)
                <tr>
                    <td>{{date_formatted($reg->fecha)}}</td>
                    <td>{{$reg->turno}}</td>
                    <td>{{$reg->motivo}}</td>
                    <td>{{$reg->descripcion}}</td>
                    <td class="text-right pr-4">$ {{money($reg->Monto)}}</td>
                </tr>
                @php
                    $total_operador += $reg->Monto;
                    $total_caja += $reg->Monto;
                @endphp
            @endforeach
            </tbody>
            <tfoot class="table-footer">
                <tr>
                    <td>Total Operador: {{$item->first()->operador}} </td>
                    <td></td>
                    <td></td>
                    <td class="text-right pr-2"></td>
                    <td class="text-right pr-4"><b>$ {{money($total_operador)}}</b> </td>

                </tr>
            </tfoot>
         </table>
        @endforeach
        <div class="mb-3 pl-3 table-footer" style="font-size:1.5em">
            Total Caja:<span class="float-right mr-4"> $ {{money($total_caja)}}</span>
            @php
                $total_reporte += $total_caja;
            @endphp
        </div>

    @endforeach
    <div class="mb-3 pl-3 table-footer" style="font-size:1.5em">
            Total reporte: <span class="float-right mr-4">$ {{money($total_reporte)}}</span>

        </div>
    @endif
</div>
