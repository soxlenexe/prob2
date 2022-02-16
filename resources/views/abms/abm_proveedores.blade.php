@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>
<proveedores-abm dns="{{$dns}}"></proveedores-abm>
@endsection
