@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>
<niveles-abm dns = "{{$dns}}"></niveles-abm>
@endsection

