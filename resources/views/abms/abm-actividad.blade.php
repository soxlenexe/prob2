@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>

    <actividad-abm logs="{{$logs}}"></actividad-abm>

@endsection
