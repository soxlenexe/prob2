<?php

namespace App\Models\remote;

use App\Http\Controllers\RuntimeDatabaseController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Articulo extends Model
{
    use HasFactory;

    protected $connection;
    protected $table;
    protected $fillable =['Descripcion', 'L1', 'Rentabilidad', 'Codigo'];
    protected $primaryKey = 'Codigo';
    public $timestamps = false;

    public function __construct()
    {
        $this->table = 'dbo.Articulos';
        $this->connection = 'sqlsrv';
        parent::__construct();
    }

}
