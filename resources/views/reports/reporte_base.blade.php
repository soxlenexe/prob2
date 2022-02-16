@extends('layouts.style-pdf')
@extends('layouts.app')
@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<div class="cont">

    <div class="title-top sticky-top report-title">
        <h2>Stock Valorizado por Grupo</h2>
    </div>
    <div>
        <p class="report-context"><i class="pi pi-info-circle"></i> Datos correspondientes a los ultimos 30 dias.</p>
    </div>
    @php
        $suma_valor = 0;
        $suma_l1 = 0
    @endphp
    @foreach ($data_by_groups as $data)
        <div class="title">
           <span class="subtitle-2"> Sucursal: <strong>Central</strong>  Grupo: <strong>{{$grupos[$loop->index]->descripcion}}</strong></span>
        </div>
        <table class="table table-striped">
            <thead>
            <tr >
                <th><span data-toggle="collapse" data-target="#index{{$loop->index}}" class="clickable"><i class="pi pi-eye"></i></span></th>
                <th  scope="col">Articulo</th>
                <th scope="col">Descripcion</th>
                <th scope="col" class="text-right pr-2">Stock</th>
                <th scope="col" class="text-right pr-2">Costo</th>
                <th scope="col" class="text-right pr-2">Valor $</th>
                <th scope="col" class="text-right pr-2">L1</th>
                <th scope="col" class="text-right pr-4">Valor L1 $</th>
            </tr>
            </thead>
            <tbody class="collapse" id="index{{$loop->index}}">
                @foreach ($data as $dat )
                    @php
                    $suma_valor += intval($dat->Costo) * intval($dat->Stock) ;
                    $suma_l1 += intval($dat->L1) * intval($dat->Stock) ;
                    @endphp
                <tr>
                    <td></td>
                    <td >{{$dat->Articulo}}</td>
                    <td >{{$dat->Descripcion}}</td>
                    <td class="text-right pr-2">{{money($dat->Stock)}}</td>
                    <td class="text-right pr-2">$ {{money($dat->Costo)}}</td>
                    <td class="text-right pr-2">{{$dat->Costo * $dat->Stock}}</td>
                    <td class="text-right pr-2">$ {{money($dat->L1)}}</td>
                    <td class="text-right pr-4">{{money($dat->L1 * $dat->Stock)}}</td>
                </tr>
            @endforeach
            </tbody>
            <tfoot class="table-footer">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-right pr-2">Total Grupo: </td>
                    <td class="text-right pr-2"><b>$ {{money($suma_valor)}}</b> </td>
                    <td></td>
                    <td class="text-right pr-4"><b>$ {{money($suma_l1)}}</b> </td>
                </tr>
            </tfoot>
        </table>
        @php
            {{$suma_valor = 0; $suma_l1 = 0;}}
        @endphp
@endforeach

</div>

@endsection
