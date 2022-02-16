<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AbmStockController extends Controller
{
    public function index($dns = null){
        return view('abms.abm_stock',['dns'=>$dns]);
    }
}
