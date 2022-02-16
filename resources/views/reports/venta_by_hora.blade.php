@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">

<div class="cont">
    <div class="title-top sticky-top report-title">
        <h2 class="">Ventas por hora</h2>

        <div>
            <p class="report-context"><i class="pi pi-info-circle"></i>   Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @if (count($data_hour) == 0)
        <div class="table-footer text-center">No hay registros disponibles</div>
     @endif

     @foreach ($data_hour as $seccion )
     <div class="title">
        <span class="subtitle-1"> Sucursal: <strong>{{$seccion->first()->first()->sucursal}}</strong>
            Caja: <strong >{{$seccion->first()->first()->caja}}</strong> Fecha: {{date_formatted($seccion->first()->first()->Fecha)}} </span>
     </div>
        @foreach ($seccion as $hora)
           <div class="title">
            <span class="subtitle-3" >  <strong>Hora:{{$hora->first()->hora}}:00</strong> </span>
         </div>
         @php
             $total_art = 0;
             $total_precio = 0;
         @endphp
         <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col" >Codigo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col" class="text-right pr-2">Cantidad</th>
                    <th scope="col" class="text-right pr-4">Precio</th>

                </tr>
            </thead>
            <tbody>
           @foreach ($hora as $item)
                <tr>
                    <td>{{$item->Codigo}}</td>
                    <td>{{$item->Descripcion}}</td>
                    <td class="text-right pr-2">{{money($item->Cantidad)}}</td>
                    <td class="text-right pr-4">{{money($item->Precio)}}</td>
                </tr>
                @php
                    $total_art += $item->Cantidad;
                    $total_precio += $item->Precio;
                @endphp
           @endforeach
            </tbody>
            <tfoot class="table-footer">
                <tr>
                    <td>Total Hora: {{$item->hora}}:00</td>
                    <td></td>
                    <td class="text-right pr-2">{{money($total_art)}}</td>
                    <td class="text-right pr-4"><b>$ {{money($total_precio)}}</b> </td>

                </tr>
            </tfoot>
         </table>
        @endforeach

     @endforeach
</div>
