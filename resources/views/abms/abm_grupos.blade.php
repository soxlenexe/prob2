@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>
<grupos-abm dns="{{$dns}}"></grupos-abm>

@endsection
