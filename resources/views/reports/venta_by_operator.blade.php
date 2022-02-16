@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">

<div class="container">
    <div class="title-top sticky-top report-title">
        <h2 class="">Ventas por Fecha, Operador y Grupo</h2>
        <div>
            <p class="report-context" ><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @if (count($data_f_o_g) == 0)
        <div class="table-footer text-center">No hay registros disponibles</div>
     @endif
     {{-- ******************************************************************** --}}
    @foreach ($data_f_o_g as $fecha )
        <div class="title">
            <span class="subtitle-1"> Sucursal:  <strong>Central</strong> Fecha:  <strong>{{$fecha->first()->first()->first()->Fecha_dia}}</strong> </span>
        </div>
        @foreach ($fecha as $operador)
            <div class="title">
                <span class="subtitle-2"> Caja:  <strong>{{$operador->first()->first()->caja}}</strong> Operador: <strong>{{$operador->first()->first()->Operador}}</strong> </span>
            </div>
        @foreach ($operador as $grupo)
            @php
                $precio_grupo = 0;
            @endphp
            <div class="title">
                <span class="subtitle-3"> Grupo: <strong> {{$grupo->first()->descripcion}}</strong>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th  scope="col">Codigo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col" class="text-right pr-2">Cantidad</th>
                        <th scope="col" class="text-right pr-4">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($grupo as $item)
                    @php
                        $precio_grupo += $item->Precio;
                    @endphp
                        <tr>
                            <td>  {{$item->Codigo}} </td>
                            <td>  {{$item->Descripcion}} </td>
                            <td class="text-right pr-2">  {{money($item->Cantidad)}} </td>
                            <td class="text-right pr-4">  {{money($item->Precio)}} </td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot class="table-footer" >
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

@endforeach
</div>
@endsection
