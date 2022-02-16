<?php

namespace App\Models\remote;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Factura extends Model
{
    use HasFactory;
    protected $connection;
    protected $table;

    public function __construct()
    {
        $this->table = 'dbo.Facturas';
        $this->connection = 'sqlsrv';
        parent::__construct();
    }
}
