@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>
<stock-abm dns = "{{$dns}}"></stock-abm>
@endsection
