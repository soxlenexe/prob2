@extends('layouts.app')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
@section('content')
<div class="separador">

</div>

<client-by-sucursal :sucursales="{{$sucursales}}" cliente_id="{{$cliente_id}}" cliente_name="{{$cliente_name}}"></client-by-sucursal>

@endsection
