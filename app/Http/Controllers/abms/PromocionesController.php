<?php

namespace App\Http\Controllers\abms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PromocionesController extends Controller
{
     public function index(){
         return view('abms.abm_promociones');
     }
}
