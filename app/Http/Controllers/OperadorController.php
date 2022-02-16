<?php

namespace App\Http\Controllers;

use App\Http\Controllers\RuntimeDatabaseController;
use App\Models\Employee;
use App\Models\Sucursal;
use Illuminate\Support\Facades\DB;

class OperadorController extends Controller
{
    public $empleados = [];

    public function getOperadores($dns = '0')
    {
        if ($dns == '0') {
           RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }


        $operadores = DB::connection('sqlsrv')->select('select * from dbo.Operadores');
        return response()->json($operadores);
    }

    public function getOperadoresSucursal($sucursal)
    {
        $sucursal_dns = Sucursal::find($sucursal)->dns;

        $empleados = Employee::where("sucursal", $sucursal)->where('activo', true)->get();

        RuntimeDatabaseController::setEnviron($sucursal_dns);

        $operadores = DB::connection('sqlsrv')->select('select * from dbo.Operadores');

        foreach ($empleados as $empleado) {
            array_push($this->empleados, $empleado->name);
        }

        $operadores_filter = collect($operadores)->filter(function ($o) {
            if (!in_array($o->Operador, $this->empleados)) {
                return $o;
            }
        });

        $list = [];
        foreach ($operadores_filter as $value) {
            array_push($list, $value);
        }
        return response()->json($list);
    }
}
