@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/abms/index.css')}}">
<div class="separador">

</div>

<articulos-base data="{{$data}}" user_id="{{Auth::id()}}" dns ="{{$dns}}"></articulos-base>


@endsection
