<?php

namespace App\Models\remote;

use Illuminate\Database\Eloquent\Model;

class DetalleFactura extends Model
{
    protected $connection;
    protected $table;

    public function __construct()
    {
        $this->table = 'dbo.DeTalles';
        $this->connection = 'sqlsrv';
        parent::__construct();
    }
}
