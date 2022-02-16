@extends('layouts.no_style')

@section('content')

<form action="/logout" method="POST">@csrf <input type="submit" value="salir"></form>

@endsection
