@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<div class="cont">
    {{-- titulos --}}
    <div class="title-top sticky-top report-title">
        <h2>Iva Ventas</h2>
        <div>
            <p  class="report-context"><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    {{--  --}}
    @foreach ($data_total as $data_fecha)
        <div class="title">
            <span class="subtitle-2"> Caja: <strong> {{$data_fecha->first()->first()->first()->first()->first()->caja}}</strong></span>
        </div>
        @foreach ($data_fecha as $fecha)
            <div class="title">
                <span class="subtitle-3"> Fecha: <strong>{{$fecha->first()->first()->first()->first()->Fecha_dia}} </strong></span>
            </div>
            @php
                $total_fecha = 0;
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
                        <th scope="col" class="text-right pr-2">Iva 21</th>
                        <th scope="col" class="text-right pr-2">Neto 21</th>
                        <th scope="col" class="text-right pr-2">Iva 10,5</th>
                        <th scope="col" class="text-right pr-2">Neto 10,5</th>
                        <th scope="col" class="text-right pr-2">Iva 5</th>
                        <th scope="col" class="text-right pr-2">Neto 5</th>
                        <th scope="col" class="text-right pr-2">Iva 27</th>
                        <th scope="col" class="text-right pr-2">Neto 27</th>
                        <th scope="col" class="text-right pr-2">Iva total</th>
                        <th scope="col" class="text-right pr-2">Neto</th>
                        <th scope="col" class="text-right pr-2">Total</th>
                        <th scope="col" >Prov</th>


                    </tr>
                </thead>
                <tbody>
                @foreach ($fecha as $tipo)
                    @php
                        $total_tipo = 0;
                    @endphp
                @foreach ($tipo as $nro)
                    <tr >
                       <td style="white-space:nowrap;"> {{$nro->first()->first()->Fecha_dia}}</td><!-- fecha -->
                       <td style="white-space:nowrap;"> {{$nro->first()->first()->Tipo}}</td><!-- tipo -->
                       <td style="white-space:nowrap;">  {{$nro->first()->first()->Nro}}</td><!-- numero -->
                       <td style="white-space:nowrap;">{{$nro->first()->first()->Nombre}}</td><!-- razon social-->
                       <td style="white-space:nowrap;">{{$nro->first()->first()->Localidad}}</td><!-- localidad -->
                       <td style="white-space:nowrap;">{{$nro->first()->first()->Cuit}}</td><!-- cuit -->
                       <td>{{$nro->first()->first()->DNI}}</td><!-- dni -->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!-- exento -->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money($nro->first()->first()->Montoiva)}}</td><!-- iva 21-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!--neto 21-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!-- iva 10,5-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!-- neto 10,5-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!-- iva 5 -->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!-- neto 5-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!--iva 27-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money(0)}}</td><!--neto 27-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money($nro->first()->last()->total_iva_agrupado)}}</td><!-- total iva -->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money($nro->first()->first()->Neto)}}</td><!-- imp int-->
                       <td class="text-right pr-2"  style="white-space:nowrap;">$ {{money($nro->first()->first()->Total)}}</td><!-- total -->
                       <td style="white-space:nowrap;">{{$nro->first()->first()->provincia}}</td><!-- provincia -->
                    </tr>
                      {{-- {{date('H:i:s', strtotime($nro->first()->first()->Fecha))}} --}}
                      @php
                          $total_tipo += $nro->first()->first()->Total
                      @endphp
                    @endforeach
                      </tbody>
                      <tfoot class="table-footer" cellspacing="0">
                          <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>Total</td>
                              <td>{{$tipo->first()->first()->first()->Tipo}}</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right " style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td class="text-right pr-2"  style="white-space:nowrap;">$ {{$total_tipo}}</td>
                              <td></td>
                          </tr>
                      </tfoot>

                     @php
                         $total_fecha += $total_tipo;
                     @endphp

                @endforeach
            </table>

            <div class="table-footer">
                Total Fecha: <strong> {{$fecha->first()->first()->first()->first()->Fecha_dia}}  $ {{$total_fecha}}</strong>
            </div>
            <hr>
            <br>

        @endforeach


    @endforeach
</div>
</div>

@endsection
