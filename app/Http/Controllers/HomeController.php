<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

class HomeController extends Controller
{
    use HasRoles;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return redirect('/dashboard');
    }

    public function dashboard(Request $request){
        if (Auth::user()->hasRole('client')) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
            $sucursales = user_data()->data['sucursales'];
           return view('dash', compact('sucursales'));
        }
        return view('dash');
    }

}
