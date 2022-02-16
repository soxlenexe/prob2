@extends('layouts.app')

@section('content')
    <div class="separador">

    </div>
    <div class="separador">
        <br><br><br>
    </div>
    @role('client')
        @if (count($sucursales) == 0)
            <dashboard-generic role="client"></dashboard-generic>
        @else
            @if ( null !== $sucursales[0]['dns'])
                {{-- <dashboard sucursales="{{ $sucursales }}"></dashboard> --}}
                <dashboard-new sucursales="{{ $sucursales }}" company="{{user_data()->data['nombre']}}"></dashboard-new>
            @else
             <dashboard-generic role="client"></dashboard-generic>
            @endif

        @endif

    @endrole
    @role('admin')
    <dashboard-generic></dashboard-generic>
    @endrole
    @role('empleado')
    <dashboard-generic></dashboard-generic>
    @endrole
    <br>
    <br>
    <br>

@endsection
