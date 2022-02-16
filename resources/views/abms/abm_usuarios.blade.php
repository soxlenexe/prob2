@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>
@role('admin')
<crud-usuarios usuarios="{{$empleados}}" sucursales="{{$sucursales}}" client_id="{{$id}}" cliente_name ="{{$cliente_name}}"></crud-usuarios>
@endrole

@role('client')
<crud-usuarios usuarios="{{$empleados}}" sucursales="{{$sucursales}}" client_id="{{$id}}" cliente_name =""></crud-usuarios>
@endrole

@endsection
