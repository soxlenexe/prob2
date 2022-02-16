<?php

namespace App\Http\Controllers\tasks;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Carbon\Carbon;
use App\Mail\AvisoDeVencimientoProximo;
use App\Models\SystemAlert;
use Illuminate\Support\Facades\Mail;

class VencimientoPreTaskController extends Controller
{
    public function __invoke()
    {
        $clientes = Client::all();
        //$date = Carbon::now();
        foreach ($clientes as $cliente ) {
                $alert = new SystemAlert([
                    "string" => "Aviso: su cuota está proxima a vencer. Por favor realice el pago y avise a Digital Crams.",
                    "user_id" => $cliente->user_id
                ]);
                $alert->save();
                //mail de recordatorio de pago
                Mail::to($cliente->admin_email)->send(new  AvisoDeVencimientoProximo($cliente->cliente_descripcion) );
        }
    }
}
