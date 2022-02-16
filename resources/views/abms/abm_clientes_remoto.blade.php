@extends('layouts.app')
@section('content')

    <link rel="stylesheet" href="{{ asset('css/abms/index.css') }}">
    <div class="separador">

    </div>

    @role('empleado')
    @if (user_data()->data['sucursal_status'])
        <clientes-abm data="{{$clientes}}"></clientes-abm>
    @else
        <script type="text/javascript">
            window.location = "/dashboard";
        </script>
    @endif
    @endrole
    @role('client')

            <clientes-abm data="{{$clientes}}"></clientes-abm>

    @endrole
@endsection
