
@extends('layouts.style-pdf')
@extends('layouts.app')
@section('content')
{{-- data_f_g --}}
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">

<div class="container">

    <div class="title-top sticky-top report-title">
        <h2>Ventas por Fecha y Grupo</h2>
        <div>
            <p  class="report-context"><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @if (count($data_f_g) == 0)
        <div class="table-footer text-center">No hay registros disponibles</div>
     @endif
    @foreach ($data_f_g as $grupo => $fechas )
        <div class="title">
            <span class="subtitle-1"> Fecha: <strong>{{$fechas->first()->first()->Fecha_dia}} </strong></span>
        </div>
        @foreach ($fechas as $fecha => $grupos)
            @php
                $precio_grupo = 0;
            @endphp
            <table class="table table-striped">
                <div class="title ">
                    <span class="subtitle-3">Sucursal: <strong>{{$grupos->first()->sucursal}}</strong>  Grupo: <strong>{{$grupos->first()->descripcion}}</strong></span>
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
                    @foreach ($grupos as $grupo)
                    @php
                        $precio_grupo += $grupo->Precio;
                    @endphp
                        <tr>
                            <td>{{$grupo->Codigo}} </td>

                            <td>{{$grupo->Descripcion}} </td>
                            <td class="text-right pr-2">  {{money($grupo->Cantidad)}} </td>
                            <td class="text-right pr-4">  {{money($grupo->Precio)}} </td>
                        </tr>


                    @endforeach
                </tbody>
                <tfoot class="table-footer">
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="text-right pr-2">Total Grupo: </td>
                        <td class="text-right pr-4"><b>$ {{money($precio_grupo)}}</b> </td>

                    </tr>
                </tfoot>
            </table>
        @endforeach

    @endforeach



</div>
@endsection
