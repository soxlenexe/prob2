@extends('layouts.app')
<link rel="stylesheet" href="{{ asset('css/abms/index.css') }}">
@section('content')
    <div class="separador">

    </div>
    @role('client')
        <crud-sucursales></crud-sucursales>
    @endrole
    @role('empleado')
        <script type="text/javascript">
            window.location = "/dashboard";
        </script>
    @endrole

@endsection
