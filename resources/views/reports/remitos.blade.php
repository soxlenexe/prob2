@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<link  href="{{ltrim(asset('css/reports/basic_report.css')), '/'}}" rel="stylesheet">

<div class="container">
    <div class="title-top sticky-top mt-0 pb-1 report-title" >
        <h2>Remitos</h2>
        <div>
            <p  class="report-context"><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @if (count($data_f_g) == 0)
        <div class="table-footer text-center">No hay registros disponibles</div>
    @else
    @php
        $total_reporte = 0;
    @endphp

    @foreach ($data_f_g as $fecha)
        <div class="title">
            <span class="subtitle-1"> Fecha: <strong class="mr-5">{{date_formatted($fecha->first()->first()->Fecha)}}</strong> </span>
        </div>
        @php
            $total_fecha = 0;
        @endphp
        @foreach ($fecha as $grupo)
        @php
            $precio_grupo = 0;
        @endphp
        <table class="table table-striped">
            <div class="title ">
                <span class="subtitle-3">Sucursal: <strong>{{$grupo->first()->sucursal}}</strong>  Grupo: <strong>{{$grupo->first()->descripcion}}</strong></span>
            </div>
            <thead>
                <tr>
                    <th  scope="col">Codigo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col" class="text-right pr-2">Cantidad</th>
                    <th scope="col" class="text-right pr-4">Precio</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($grupo as $g)
                @php
                    $precio_grupo += $g->Precio;
                @endphp
                    <tr>
                        <td>{{$g->Codigo}} </td>

                        <td>{{$g->Descripcion}} </td>
                        <td class="text-right pr-2">  {{money($g->Cantidad)}} </td>
                        <td class="text-right pr-4">  {{money($g->Precio)}} </td>
                    </tr>


                @endforeach
            </tbody>
            <tfoot class="table-footer mb-0">
                <tr>
                    <td></td>
                    <td></td>
                    <td class="text-right pr-2">Total Grupo: </td>
                    <td class="text-right pr-4"><b>$ {{money($precio_grupo)}}</b> </td>
                    @php
                        $total_fecha += $precio_grupo
                    @endphp

                </tr>
            </tfoot>
        </table>
        @endforeach
        <div class="table-footer mt-0 mb-2">
            <div class=" ml-4" style="font-size: 1.4em;">
                Total fecha : {{$g->Fecha_dia}}  <span class="float-right mr-4">{{money($total_fecha)}}</span>
             </div>

         </div>
        @php
            $total_reporte += $total_fecha
        @endphp

    @endforeach
    <br>
    <div class="table-footer  mb-2">
        <div class=" ml-4" style="font-size: 1.8em;">
            Total reporte:    <span class="float-right mr-4"> {{money($total_reporte)}}</span>
         </div>

     </div>

    @endif
</div>
