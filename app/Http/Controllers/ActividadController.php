<?php

namespace App\Http\Controllers;

use App\Models\CustomEventLog;
use App\Models\Sucursal;
use Illuminate\Http\Request;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Facades\Auth;

class ActividadController extends Controller
{
    use HasRoles;
    public function index(){
        if (Auth::user()->hasRole('client')) {
            $logs = CustomEventLog::where('company_id', user_data()->client_id)->orderBy('created_at', 'desc')->limit(100)->get();
            foreach ($logs as $log) {
                if ($log->sucursal_id == 10000) {
                    $log->operador = 'Administrador';
                }else{
                    $log->suc_name = Sucursal::find($log->sucursal_id)->sucursal_descripcion;
                }

            }

           return view('abms.abm-actividad', compact('logs'));
        }
        return response("Acceso denegado", 403);;
    }
}
