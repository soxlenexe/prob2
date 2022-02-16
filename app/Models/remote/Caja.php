<?php

namespace App\Models\remote;

use Illuminate\Database\Eloquent\Model;

class Caja extends Model
{
    protected $connection;
    protected $table;

    public function __construct()
    {
        $this->table = 'dbo.Caja';
        $this->connection = 'sqlsrv';
        parent::__construct();
    }
}
