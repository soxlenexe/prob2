<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Error;
use Illuminate\Auth\Events\Logout;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function vueLogin(Request $request){
 
        if (Auth::attempt(['email' => $request->username, 'password' => $request->password ])) {
            $user = Auth::user();
            
            if (Auth::user()->activo == false) {
                Auth::logout();
                return response()->json(['status' => 'deleted']);
            }

            $username = $user->name;
            Auth::logoutOtherDevices($request->password);


            return response()->json([
                'status'   => 'success',
                'user' => $username,
            ]);




        }else{
            return response()->json([
                'status'   => 'error'
            ]);
        }


    }
}
