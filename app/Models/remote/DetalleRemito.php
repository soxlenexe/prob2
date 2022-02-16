<?php

namespace App\Models\remote;


use Illuminate\Database\Eloquent\Model;

class DetalleRemito extends Model
{
    protected $connection;
    protected $table;

    public function __construct()
    {
        $this->table = 'dbo.DeTalleRemitos';
        $this->connection = 'sqlsrv';
        parent::__construct();
    }
}
