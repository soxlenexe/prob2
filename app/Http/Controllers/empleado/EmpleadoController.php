<?php

namespace App\Http\Controllers\empleado;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Sucursal;
use App\Models\User;
use Spatie\Permission\Traits\HasRoles;
use Error;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class EmpleadoController extends Controller
{
    use HasRoles;

    public function indexByAdmin(Request $request, $id)
    {
        if (Auth::user()->hasRole('admin')) {
            $empleados = Employee::where('cliente_id', $id)->where('activo', true)->get();
            foreach ($empleados as $empleado) {
                $empleado->creado =  date('d-m-Y', strtotime($empleado->created_at));
                $empleado->sucursal_name = Sucursal::find($empleado->sucursal, ['sucursal_descripcion'])->sucursal_descripcion;
            }
            $sucursales = Sucursal::where('cliente_id', $id)->get(['id', 'sucursal_descripcion']);
            $cliente_name = Client::find($id, ['cliente_descripcion']);

            return view('abms.abm_usuarios', compact('empleados', 'sucursales', 'id', 'cliente_name'));
        }
    }

    public function index(Request $request)
    {

        $empleados = Employee::where('cliente_id', Auth::user()->client_id)->where('activo', true)->get();
        foreach ($empleados as $empleado) {
            $empleado->creado =  date('d-m-Y', strtotime($empleado->created_at));
            $empleado->sucursal_name = Sucursal::find($empleado->sucursal, ['sucursal_descripcion'])->sucursal_descripcion;
        }
        $sucursales = Sucursal::where('cliente_id', Auth::user()->client_id)->get(['id', 'sucursal_descripcion']);
        $id = Auth::user()->client_id;
        return view('abms.abm_usuarios', compact('empleados', 'sucursales', 'id'));
    }

    public function storeEmployee(Request $request)
    {

        $plan = Client::find($request->cliente_id, 'plan_id');

        $plan_pcs = DB::table('plans')->where('id', '=', $plan->plan_id)->get('pcs');

        $employees_qty = Employee::where('cliente_id', $request->cliente_id)->where('activo', true)->get();

        if ($employees_qty->count() >=  $plan_pcs[0]->pcs) {
            return response()->json(['status' => 'employees_limit_reached']);
        }

        try {
            $employee = new Employee();
            $employee->name = $request->name;
            $employee->email =  $request->email;
            $employee->role =  $request->role;
            $employee->sucursal = intval($request->sucursal['value']);
            $employee->cliente_id = $request->cliente_id;
            $employee->save();

            return response()->json($employee);
        } catch (Error $e) {
            return response()->json(['status' => 'failed']);
        }
    }


    public function updateEmployee(Request $request)
    {

        $employee = Employee::find($request->id);
        // $employee->name = $request->name;

        $employee->activo =  $request->activo;
        if ($request->activo == false) {

            $user = User::where('email', $request->email)->first();
            if ($user) {
                $user->email = $request->email;
                $user->activo = false;
                $user->save();
            }
        }

        // $employee->sucursal = intval($request->sucursal['value']);

        $employee->email = $request->email;
        $employee->save();
        return response()->json($employee);
    }
}
