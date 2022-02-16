<?php

namespace App\Http\Controllers\tasks;

use App\Http\Controllers\Controller;
use App\Mail\AvisoDeVencimiento;
use App\Models\Client;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

class VencimientoTaskController extends Controller
{
    public function __invoke()
    {
        $clientes = Client::all();

        $date = Carbon::now();
        $before_one_month = Carbon::now()->subMonth();
        $before_two_monts = Carbon::now()->subMonths(2);
        foreach ($clientes as $cliente ) {
            $vencimiento = Carbon::make($cliente->vencimiento);
            if ($vencimiento <= $before_two_monts) {
                //enviar aviso de cancelacion
                Mail::to($cliente->admin_email)->send(new  AvisoDeVencimiento($cliente->cliente_descripcion) );
            }
            if ($vencimiento <= $before_one_month) {
                //enviar aviso de 30 dias de vencido
                Mail::to($cliente->admin_email)->send(new  AvisoDeVencimiento($cliente->cliente_descripcion) );
            }
            if ($vencimiento <= $date) {
                //enviar aviso de que se vencio hoy
                Mail::to($cliente->admin_email)->send(new  AvisoDeVencimiento($cliente->cliente_descripcion) );
            }
        }
    }
}
