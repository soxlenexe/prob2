@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>
<marcas-abm dns="{{$dns}}"></marcas-abm>
@endsection
