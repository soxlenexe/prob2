<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BaseConnectionModel extends Model
{
    public function __construct()
    {
        //DB::connection('sqlsrv');
        parent::__construct();
    }

}
