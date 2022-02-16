@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>
<medios-abm dns="{{$dns}}"></medios-abm>
@endsection
