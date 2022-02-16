<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Employee;
use App\Models\Preset;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {


        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password =  Hash::make($data['password']);
        $clientes = Client::all(['admin_email', 'id']);
        $employees = Employee::all();

        // if (strlen($data['password']) < 8) {
        //     return response()->json(["error"=>"short password"]);
        // }
        foreach ($clientes as $cliente) {
            if ($data['email'] == $cliente->admin_email) {
                $user->client_id = $cliente->id ;
               $user->save();
               $user->assignRole('client');
               //event(new Registered($user));
               $preset = new Preset();
               $preset->user_id = $user->id;
               $preset->save();
               return $user;

             }
        }
        foreach ($employees as $employee) {
            if ($data['email'] == $employee->email) {
                $user->client_id = $employee->cliente_id ;
                $user->sucursal_id = $employee->sucursal;
               $user->save();
               $user->assignRole('empleado');
               //event(new Registered($user));
               $preset = new Preset();
               $preset->user_id = $user->id;
               $preset->save();
               return $user;

             }
        }
        return response()->json(["errors" => ["email" => "El email no se encuentra reguistrado en nuestro sistema"]], 422);

    }
}
