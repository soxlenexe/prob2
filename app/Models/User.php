<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable  implements MustVerifyEmail
{
    use HasFactory, Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'sucursal_id',
        'client_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // public function roles(){
    //     return $this->roles()->name;
    // }
    public function getEmail(){
        return $this->email;
    }

    public function client_name(){
        return Client::find($this->client_id)->cliente_descripcion;
    }

    public function setCurrentDns($dns = null){
        if (Auth::user()->hasRole('client') & $dns == null) {
            $company = Client::find($this->client_id);
            $sucursales = Sucursal::where('cliente_id', $company->id)->get();
            Auth::user()->data = [
                'nombre' =>  $company->cliente_descripcion,
                'rol' => 'client',
                'sucursales' => $sucursales,
                'dns' => '0.0.0.0'//$sucursales[0]['dns']
                ];

           return Auth::user();
        }else{
            $company = Client::find($this->client_id);
            $sucursales = Sucursal::where('cliente_id', $company->id)->get();
            Auth::user()->data = [
                'nombre' =>  $company->cliente_descripcion,
                'rol' => 'client',
                'sucursales' => $sucursales,
                'dns' => $dns//$sucursales[0]['dns']
                ];

           return Auth::user();
        }

    }

    public function customPermission($dns){
        // si el user es dgcrams le agrego un nombre de operador
        //solo a efectos del nombre de user logueado en el nav
        if (Auth::user()->hasRole('admin') ){
            $data = [
                'nombre' => Auth::user()->name,
                'company_id' => 100000
            ];
            Auth::user()->data = $data;
            return Auth::user();
        }
        // si el user es un cliente le sumo el nombre de operador
        //a efectos del nombre de user logueado
        if (Auth::user()->hasRole('client')) {
            $company = Client::find($this->client_id);
            $sucursales = Sucursal::where('cliente_id', $company->id)->where('activo', true)->get();


            if ($dns != '') {
                Auth::user()->data = [
                    'nombre' =>  $company->cliente_descripcion,
                    'rol' => 'client',
                    'sucursales' => $sucursales,
                    'dns' => $dns
                    ];
            }else{
                if (count($sucursales) >= 1) {
                        Auth::user()->data = [
                            'nombre' =>  $company->cliente_descripcion,
                            'rol' => 'client',
                            'sucursales' => $sucursales,
                            'dns' => $sucursales[0]['dns']
                            ];
                }else{
                    Auth::user()->data = [
                        'nombre' =>  $company->cliente_descripcion,
                        'rol' => 'client',
                        'sucursales' => $sucursales,
                        'dns' => '0.0.0.0'
                        ];
                }
            }

           return Auth::user();
        }

        $company = Client::find($this->client_id);
        $sucursal = Sucursal::find($this->sucursal_id);

        $data = [
            'company_id' => $company->id,
            'company_description' => $company->cliente_descripcion,
            'sucursal_id' => $sucursal->id,
            'dns'  => $sucursal->dns,
            'sucursal_descripcion' => $sucursal->sucursal_descripcion,
            'sucursal_status' => boolval($sucursal->activo)
        ];
        if (Auth::user()) {
            if($employee = Employee::where('email', Auth::user()->email)->get() ){
                $data['sucursal_rol'] = $employee->first()->role;
                $data['operador'] = $employee->first()->name;
                $data['nombre'] = $employee->first()->name;
            }
            Auth::user()->data = $data;
        }
        return Auth::user();
    }

}
