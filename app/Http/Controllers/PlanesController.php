<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Traits\HasRoles;

class PlanesController extends Controller
{
    use HasRoles;
    public function index(){
        if (Auth::user()->hasRole('admin')) {
            return view('admin.planes');
        }
        return redirect('/dashboard');

    }

    public function storePlan(Request $request){

        if (Auth::user()->hasRole('admin')) {
            $plan = DB::insert('insert into plans (name, pcs,suc_qty, anual_price, month_price, duration_months)
                    values (?, ?, ?,?, ?, ?)',
                [ $request->name, $request->pcs, $request->suc_qty, $request->anual_price,
                    $request->month_price, $request->duration_months
                ]);
            return response()->json($plan);
        }
        return response('', 403);
    }

    public function updateField(Request $request){
       // return $request;
        if (Auth::user()->hasRole('admin')) {
           $consulta = DB::update('update plans set '. $request->field. ' = '.$request->new_value.' where id = ?', [$request->identifier]);
           return $consulta;
        }
    }
}
