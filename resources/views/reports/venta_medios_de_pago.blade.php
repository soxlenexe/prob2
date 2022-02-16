@extends('layouts.style-pdf')
@extends('layouts.app')
@section('content')
<link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<div class="container">

    <div class="title-top sticky-top report-title" >
        <h2>Ventas por medios de pago</h2>
        <div>
            <p class="report-context"><i class="pi pi-info-circle"></i>   Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>

    <div class="title">
        <span class="subtitle-1" >Sucursal: <strong >Central</strong></span>
     </div>
     @if (count($data_caja) == 0)
        <div class="table-footer text-center">No hay registros disponibles</div>
     @endif
     @foreach ($data_caja as $fecha)

        <div class="title">
            <span class="subtitle-2">Fecha: <strong >{{($fecha->first()->first()->first()->Fecha_dia)}}</strong></span>
        </div>
            @foreach ($fecha as $caja)
                    <div class="title">
                        <span class="subtitle-2">Caja: <strong >{{$caja->first()->first()->caja}}</strong></span>
                    </div>
                        @php
                            $total_fecha = 0;
                        @endphp
                    @foreach ($caja as $medio)
                        {{-- {{var_dump($medio)}} <br><br> --}}
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Forma de pago</th>
                                    <th>Tipo</th>
                                    <th>Nro</th>
                                    <th>Cupon</th>
                                    <th class="text-right pr-4">Total Factura</th>
                                </tr>
                                @php
                                    $total_forma = 0;
                                @endphp
                            </thead>
                            <tbody>
                                @foreach ($medio as $item)
                                    @if ($item->descripcion == 'EFECTIVO')
                                    @else
                                        <tr>
                                            <td>{{$item->descripcion}}</td>
                                            <td>{{$item->Tipo}}</td>
                                            <td>{{$item->Nro}}</td>
                                            <td>{{$item->Cupon}}</td>
                                            <td class="text-right pr-4">{{money($item->Monto)}}</td>
                                        </tr>
                                    @endif
                                @php
                                    $total_forma += $item->Monto
                                @endphp

                                @endforeach

                            </tbody>
                            <tfoot class="table-footer">
                                <tr>
                                    <td>Total {{$item->descripcion}}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-right pr-4">{{money($total_forma)}}</td>
                                </tr>
                            </tfoot>
                        </table>
                        @php
                            $total_fecha += $total_forma;
                        @endphp

                    @endforeach
                    <div class="table-footer">
                       <div class=" ml-4" style="font-size: 1.8em;">
                           Total Caja : {{$caja->first()->first()->caja}}  <span class="float-right mr-4">{{money($total_fecha)}}</span>
                        </div>

                    </div>
                    <br>

                    {{-- @foreach ($caja as $item)
                        @php
                            $total_efectivo = 0;
                            $total_tarjeta = 0;
                        @endphp
                        @foreach ($item as $factura)
                            @if ($factura->descripcion == 'EFECTIVO')
                                @php
                                    $total_efectivo += $factura->Monto;
                                @endphp
                            @endif
                        @endforeach
                        @if ($total_efectivo!= 0)
                            <div class="table-footer">Total EFECTIVO ------> {{$total_efectivo}}</div>
                        @endif

                        @foreach ($item as $factura)
                            @if ($factura->descripcion != 'EFECTIVO')
                                @php
                                    $total_tarjeta += $factura->Monto;
                                @endphp
                                {{$factura->descripcion}} -- {{$factura->Tipo}} -- {{$factura->Nro}}  -- {{floatval($factura->Monto)}}<br>
                            @endif
                        @endforeach

                    @endforeach

                    @if ($total_tarjeta != 0)
                        <div class="table-footer">Total {{$item->first()->descripcion}}----------> {{$total_tarjeta}}</div><br>
                    @endif --}}

            @endforeach
     @endforeach
</div>
