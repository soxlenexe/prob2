
@extends('layouts.app')
@extends('layouts.style-pdf')
@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<style>
    .contenedor-especial{
        font-size: .7em;
    }
</style>
<div class="contenedor-especial">
    {{-- titulos --}}
    <div class="title-top sticky-top report-title">
        <h2>Iva Ventas</h2>
        <div>
            <p  class="report-context"><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @foreach ($data_total as $data_fecha)
    <div class="title">
        <span class="subtitle-1"> Fecha: <strong> {{$data_fecha->first()->first()->first()['fecha']}}</strong></span>
    </div>
        @foreach ($data_fecha as $caja)
            @php
                $f_iva21=0;$f_iva5=0;$f_iva105=0;$f_iva27=0;
                $f_neto21=0;$f_neto105=0;$f_neto5=0;$f_neto27=0;
                $f_exento=0;$f_imp_int=0;$f_neto_total=0;$f_iva_total=0;
                $f_total_bruto=0;
            @endphp
            <div class="title">
                <span class="subtitle-2"> Caja: <strong> {{$caja->first()->first()['caja']}}</strong></span>
                {{-- <span class="subtitle-2"> Tipo: <strong> {{$caja->first()->first()['tipo']}}</strong></span> --}}
            </div>
            @foreach ($caja as $tipo)
            @php
                $t_iva21=0;$t_iva5=0;$t_iva105=0;$t_iva27=0;
                $t_neto21=0;$t_neto105=0;$t_neto5=0;$t_neto27=0;
                $t_exento=0;$t_imp_int=0;$t_neto_total=0;$t_iva_total=0;
                $t_total_bruto=0;
            @endphp

                <table class="table table-striped table-responsive"  >
                    <thead>
                        <tr>
                            <th  scope="col">Fecha</th>
                            <th  scope="col">Tipo</th>
                            <th scope="col">Nro</th>
                            <th scope="col" class="text-center">Raz. Soc</th>
                            <th scope="col" class="text-center">Loc</th>
                            <th scope="col" class="text-center">Cuit</th>
                            <th scope="col" class="text-center">DNI</th>
                            <th scope="col" class="text-center">Exento</th>
                            <th scope="col" class="text-right pr-2">Neto 27</th>
                            <th scope="col" class="text-right pr-2">Iva 27</th>
                            <th scope="col" class="text-right pr-2">Neto 21</th>
                            <th scope="col" class="text-right pr-2">Iva 21</th>
                            <th scope="col" class="text-right pr-2">Neto 10,5</th>
                            <th scope="col" class="text-right pr-2">Iva 10,5</th>
                            <th scope="col" class="text-right pr-2">Neto 5</th>
                            <th scope="col" class="text-right pr-2">Iva 5</th>
                            <th scope="col" class="text-right pr-2">Imp Int</th>
                            <th scope="col" class="text-right pr-2">Neto total</th>
                            <th scope="col" class="text-right pr-2">Iva total</th>
                            <th scope="col" class="text-right pr-2">Total</th>
                            <th scope="col" >Prov</th>
                        </tr>

                    </thead>
                <tbody>
                @foreach ($tipo as $item)
                    <tr >
                        <td style="white-space:nowrap;">{{$item['fecha']}} </td><!-- fecha -->
                        <td style="white-space:nowrap;"> {{$item['tipo']}}</td><!-- tipo -->
                        <td style="white-space:nowrap;">  {{$item['nro']}}</td><!-- numero -->
                        <td style="white-space:nowrap;">{{$item['razon']}}</td><!-- razon social-->
                        <td style="white-space:nowrap;"></td><!-- localidad -->
                        <td style="white-space:nowrap;">{{$item['cuit']}}</td><!-- cuit -->
                        <td></td><!-- dni -->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['neto_exento'])}}</td><!-- exento -->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['neto27'])}}</td><!--neto 27-->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['iva27'])}}</td><!--iva 27-->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['neto21'])}}</td><!--neto 21-->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['iva21'])}}</td><!-- iva 21-->

                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['neto105'])}}</td><!-- neto 10,5-->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['iva105'])}}</td><!-- iva 10,5-->

                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['iva5'])}}</td><!-- iva 5 -->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['neto5'])}}</td><!-- neto 5-->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['imp_int'])}}</td><!-- imp int-->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money( $item['total'] - $item['totales']['iva_total'] )}}</td><!-- neto total-->
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['totales']['iva_total'])}}</td><!-- total iva -->

                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($item['total'])}}</td><!-- total -->
                        <td style="white-space:nowrap;">{{$item['provincia']}}</td><!-- provincia -->
                    </tr>
                    @php
                        $t_iva21 += $item['totales']['iva21'];$t_iva5+=$item['totales']['iva5'];$t_iva105+=$item['totales']['iva105'];$t_iva27+=$item['totales']['iva27'];
                        $t_neto21+=$item['totales']['neto21'];$t_neto105+=$item['totales']['neto105'];$t_neto5+=$item['totales']['neto5'];$t_neto27+=$item['totales']['neto27'];
                        $t_exento+=$item['totales']['neto_exento'];    $t_imp_int+=$item['imp_int'];   $t_neto_total+= ($item['total'] - $item['totales']['iva_total']) ;
                        $t_iva_total+=$item['totales']['iva_total']; $t_total_bruto+=$item['total'];
                        $tipo = $item['tipo'];

                    @endphp

                @endforeach
                </tbody>
                <tfoot class="table-footer" cellspacing="0"
                style="font-size: 1.1em">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{{$tipo}}</td>
                        <td></td>
                        <td></td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_exento)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_iva27)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_neto27)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_iva21)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_neto21)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_iva105)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_neto105)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_iva5)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_neto5)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_imp_int)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_neto_total)}}</td>
                        <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($t_iva_total)}}</td>
                        <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($t_total_bruto)}}</td>
                        <td></td>
                    </tr>
                </tfoot>
                @php

                    $f_iva21+=$t_iva21;$f_iva5+=$t_iva5;$f_iva105+=$t_iva105;$f_iva27+=$t_iva27;
                    $f_neto21+=$t_neto21;$f_neto105+=$t_neto105;$f_neto5+=$t_neto5;$f_neto27+=$t_neto27;
                    $f_exento+=$t_exento;$f_imp_int+=$t_imp_int;$f_neto_total+=$t_neto_total;$f_iva_total+=$t_iva_total;
                    $f_total_bruto+=$t_total_bruto;
                @endphp

            @endforeach
            </table>
        @endforeach

            <table class="table table  table-footer">
                <thead>

                    <td>Totales fecha</td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <th scope="col" class="text-center">Exento</th>
                    <th scope="col" class="text-right pr-1">Neto 27</th>
                    <th scope="col" class="text-right pr-1">Iva 27</th>
                    <th scope="col" class="text-right pr-1">Neto 21</th>
                    <th scope="col" class="text-right pr-1">Iva 21</th>
                    <th scope="col" class="text-right pr-1">Neto 10,5</th>
                    <th scope="col" class="text-right pr-1">Iva 10,5</th>
                    <th scope="col" class="text-right pr-1">Neto 5</th>
                    <th scope="col" class="text-right pr-1">Iva 5</th>
                    <th scope="col" class="text-right pr-1">Imp Int</th>
                    <th scope="col" class="text-right pr-1">Neto total</th>
                    <th scope="col" class="text-right pr-1">Iva total</th>
                    <th scope="col" class="text-right pr-1">Total</th>
                    <th scope="col" >Prov</th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                <tr>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_exento)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_iva27)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_neto27)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_iva21)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_neto21)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_iva105)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;"> $  {{money($f_neto105)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_iva5)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_neto5)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_imp_int)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_neto_total)}}</td>
                    <td class="text-right pr-1" style="white-space:nowrap;">$ {{money($f_iva_total)}}</td>
                    <td class="text-right pr-1"  style="white-space:nowrap;">$ {{money($f_total_bruto)}}</td>
                    <td></td>
                </tr>
            </tbody>
            </table>

        <br><hr><br>
    @endforeach



</div><!-- cont->

@endsection
