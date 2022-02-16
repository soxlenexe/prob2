@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<div class="container">

    <div class="title-top sticky-top report-title">
        <h2>Movimientos de Stock</h2>
        <div>
            <p  class="report-context"><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @foreach ( $data as $item )
        <div class="title">
            <span class="subtitle-1"> Sucursal: <strong>{{$item->first()->Sucursal}}</strong> Fecha: <strong class="mr-3">{{$item->first()->Fecha_dia}}</strong> </span>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th  scope="col">Codigo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col" class="text-right pr-2">Cantidad</th>
                    <th scope="col" class="text-right pr-2">Stock actual</th>
                    <th scope="col" class="text-right pr-2">Hora</th>
                    <th scope="col" class="text-right pr-2">Documento</th>
                    <th scope="col" class="text-right pr-2">NroDoc</th>
                    <th scope="col" class="text-right pr-2">Detalle</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($item as $registro )
                <tr>
                    <td >{{$registro->Codigo}}</td>
                    <td >{{$registro->Descripcion}}</td>
                    <td class="text-right pr-2">{{money($registro->Cantidad)}}</td>
                    <td class="text-right pr-2">{{money($registro->Stock)}}</td>
                    <td class="text-right pr-2">{{date('H:i:s',strtotime($registro->Fecha))}}</td>
                    <td >{{$registro->Documento}}</td>
                    <td >{{$registro->NroDoc}}</td>
                    <td >{{$registro->Detalle}}</td>
                </tr>
            @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    @endforeach


</div>

@endsection
