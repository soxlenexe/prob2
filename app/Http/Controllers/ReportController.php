<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Facades\Auth;

class ReportController extends Controller
{
    use HasRoles;

    public function index(){
        if (Auth::user()->hasRole('empleado') && user_data()->data['sucursal_status'] == true && dbCheck(user_data()->data['dns'])) {
            return view('reports.index');
        }
        if (Auth::user()->hasRole('client')) {
            return view('reports.index');
        }

        return redirect('/dashboard');

    }
}
