@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{asset('css/reports/basic_report.css')}}">
<link rel="stylesheet" href="{{asset('css/system_alert.css')}}">
<div class="separador mt-5">
    -
</div>
    <div class="cont mt-5">
        <div class="row">
            <div class="col-md-6"><h3>Panel de notificaciones</h3></div>
            <div class="col-md-6"><h3>Últimas enviadas</h3></div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <form action="{{url('/system/alert')}}" method="post" class="form-group">
                    @csrf
                    <label for="">ID usuario</label><br>
                   <select name="user_id" id="" class="form-control">
                       @foreach ($clientes as $client)

                           <option value="{{$client->id}}">{{$client->cliente_descripcion}}</option>


                       @endforeach
                    </select> <br>
                    <label for="">Tetxo</label><br>
                    <input type="text" name="string" class="form-control" required maxlength="180"
                            placeholder="Maximo 180 caracteres"> <br>
                    <label for="">Prioridad</label><br>
                    <select name="priority" id="" class="form-control">
                        <option value="high" selected>Alta</option>
                        <option value="medium">Media</option>
                        <option value="low">Baja</option>
                    </select><br>
                    <label for="">Severidad</label><br>
                    <select name="severity" id="" class="form-control">
                        <option value="warning" selected>Advertencia</option>
                        <option value="info">Aviso</option>
                        <option value="success">Comunicado</option>
                    </select><br>
                    <label for="">Vista</label><br>
                    No <input type="radio" name="visited" value="0" checked class=""> -
                    Si <input type="radio" name="visited" value="1" class=""> <br><br>
                    <label for="">Rol</label><br>
                    <select name="role" id="" class="form-control">
                        <option value="client" selected>Cliente</option>
                        <option value="employee">Usuario</option>
                        <option value="all">Todos</option>
                    </select><br>
                    <input type="submit" class="btn btn-orange btn-block">
                </form>
            </div>
            <div class="col-md-6">
                @foreach ($notificaciones  as $noti)


                <div class="card">
                    <div class="card-title">
                        {{$noti->company_name()}} <span class="status">Estado:
                        @if ($noti->visited == true)
                            <span class="leido"> <i class="pi pi-eye"></i>
                            </span>
                        @else
                           <span class="noleido"> <i class="pi pi-eye-slash"></i>
                           </span>
                        @endif
                    </span>
                    </div>
                    <div class="card-body">
                        {{$noti->string}}
                        <span class="status bg-white">Enviado: {{date_formatted($noti->created_at)}}</span>
                    </div>
                </div>

                @endforeach
            </div>
        </div>
    </div>
@endsection
