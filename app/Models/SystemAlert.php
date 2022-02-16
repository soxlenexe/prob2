<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemAlert extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'visited', 'created_at', 'id', 'updated_at'];

    public function company_name(){
        return Client::find($this->user_id)->cliente_descripcion;
    }
}
