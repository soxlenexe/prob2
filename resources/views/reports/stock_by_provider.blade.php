@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">

<div class="cont">
    <div class="title-top sticky-top report-title">
        <h2 class="">Stock Valorizado por Proveedor</h2>
        <div>
            <p  class="report-context"><i class="pi pi-info-circle"></i>   Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
        @php
            $suma_valor_pesos = 0;
            $suma_l1 = 0;
            $suma_l2 = 0;
            $suma_l3 = 0;
            $suma_valor_dolar = 0;
        @endphp
    @foreach ($chunks as $chunk )
            <div class="title">
                <span class="subtitle-2"> Sucursal: <strong>{{$chunk->first()->first()->Sucursal}}</strong> Proveedor: <strong >{{$chunk->first()->first()->Nombre}}</strong></span>
            </div>
            @foreach ($chunk  as $grupo)
                <div class="title">
                    <span class="subtitle-2"> Grupo: <strong>{{$grupo->first()->descripcion}}</strong></span>
                </div>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th  scope="col">Articulo</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col" class="text-right pr-2">Stock</th>
                            <th scope="col" class="text-right pr-2">Costo Dolar</th>
                            <th scope="col" class="text-right pr-2">Valor Dolar</th>
                            <th scope="col" class="text-right pr-2">Costo</th>
                            <th scope="col" class="text-right pr-2">Valor $</th>
                            <th scope="col" class="text-right pr-2">L1</th>
                            <th scope="col" class="text-right pr-4">Valor L1 $</th>
                            <th scope="col" class="text-right pr-2">L2</th>
                            <th scope="col" class="text-right pr-4">Valor L2 $</th>
                            <th scope="col" class="text-right pr-2">L3</th>
                            <th scope="col" class="text-right pr-4">Valor L3 $</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($grupo as $registro )
                            @php
                            $suma_valor_dolar += $registro->CostoD * intval($registro->Stock) ;
                            $suma_valor_pesos += intval($registro->Costo) * intval($registro->Stock) ;
                            $suma_l1 += intval($registro->L1) * intval($registro->Stock) ;
                            $suma_l2 += intval($registro->L2) * intval($registro->Stock) ;
                            $suma_l3 += intval($registro->L3) * intval($registro->Stock) ;
                            @endphp
                        <tr>
                            <td >{{$registro->Codigo}}</td>
                            <td >{{$registro->Descripcion}}</td>
                            <td class="text-right pr-2">{{money($registro->Stock)}}</td>
                            <td class="text-right pr-2">{{money($registro->CostoD)}}</td>
                            <td class="text-right pr-2">{{$registro->Stock * $registro->CostoD}}</td>
                            <td class="text-right pr-2">$ {{money($registro->Costo)}}</td>
                            <td class="text-right pr-2">{{$registro->Costo * $registro->Stock}}</td>
                            <td class="text-right pr-2">$ {{money($registro->L1,)}}</td>
                            <td class="text-right pr-2">{{money($registro->L1 * $registro->Stock,2)}}</td>
                            <td class="text-right pr-2">$ {{money($registro->L2,)}}</td>
                            <td class="text-right pr-2">{{money($registro->L2 * $registro->Stock,2)}}</td>
                            <td class="text-right pr-2">$ {{money($registro->L3,)}}</td>
                            <td class="text-right pr-4">{{money($registro->L3 * $registro->Stock)}}</td>
                        </tr>
                    @endforeach
                    </tbody>
                    <tfoot class="table-footer">
                        <tr >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right pr-2">Total Grupo: </td>
                            <td class="text-right pr-2"><b>$ {{$suma_valor_dolar}}</b> </td>
                            <td></td>
                            <td class="text-right pr-2"><b>$ {{$suma_valor_pesos}}</b> </td>
                            <td></td>
                            <td class="text-right pr-2"><b>$ {{$suma_l1}}</b> </td>
                            <td></td>
                            <td class="text-right pr-2"><b>$ {{$suma_l2}}</b> </td>
                            <td></td>
                            <td class="text-right pr-4"><b>$ {{$suma_l3}}</b> </td>
                        </tr>
                    </tfoot>
                @php
                    $suma_valor_pesos = 0;
                    $suma_l1 = 0;
                    $suma_l2 = 0;
                    $suma_l3 = 0;
                    $suma_valor_dolar = 0;
                @endphp

                </table>


                <br><br>
            @endforeach
    @endforeach
</div>
@endsection
