<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Preset extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'preset_1', 'preset_2'];
    protected $casts = [
        'preset_1'  => 'array',
        'preset_2' =>  'array'
    ];
}
