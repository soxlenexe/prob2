@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/index.css')}}">

{{-- <div class="sticky-top mt-3 title-div">
        <h2 class="title">Reportes del sistema</h2>
        <hr class="main-hr">
</div>
<div style="min-height: 120px;">

</div>
<div class="container ">
    <reports-menu user_data="{{user_data()}}"></reports-menu>
</div> --}}
<div style="min-height: 40px"></div>
<reports-new-menu user_data="{{user_data()}}"></reports-new-menu>
@endsection
