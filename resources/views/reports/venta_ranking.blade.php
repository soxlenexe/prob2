@extends('layouts.style-pdf')
@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<div class="container">

    <div class="title-top sticky-top mt-0 pb-1" style="background-color: rgb(240, 239, 239)">
        <h2>Ranking de Ventas</h2>
        <div>
            <p style="color:gray" class="mb-2 ml-4"><i class="pi pi-info-circle"></i>  Datos correspondientes a los ultimos 30 dias.</p>
        </div>
    </div>
    @if (count($data_groups) == 0)
            <div class="table-footer text-center">No hay registros disponibles</div>
    @else
    <div class="title">
        <span class="ml-2" style="font-size:1.8em;"> Sucursal: <strong class="mr-5" style="font-size:1.2em;">Central</strong> </span>
        <span class="ml-2" style="font-size:1.8em;"> Caja: <strong class="mr-5" style="font-size:1.2em;">2</strong> </span>
     </div>
     <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" >Codigo</th>
                <th scope="col">Descripcion</th>
                <th scope="col" class="text-right pr-2">Cantidad</th>
                <th scope="col" class="text-right pr-4">Precio</th>
                <th scope="col" class="text-right pr-4">Total</th>


            </tr>
        </thead>
        <tbody>


    @foreach ($data_groups as $grupo)
        @foreach ($grupo as $item)
        <tr>
            <td>{{$item->first()->Codigo}}</td>
            <td>{{$item->first()->Descripcion}}</td>
            <td>{{count($item)}}</td>
            <td>{{$item->first()->Precio}}</td>
            <td>{{count($item) * $item->first()->Precio}}</td>
        </tr>
        @endforeach
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    @endforeach
        </tbody>
     </table>
     @endif

</div>
