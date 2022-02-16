<?php

namespace App\Http\Controllers\reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\RuntimeDatabaseController;
use Illuminate\Support\Facades\DB;

class GrupoController extends Controller
{

    public function getGroups($dns = null){


        if ($dns == null) {
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
        }else{
            RuntimeDatabaseController::setEnviron($dns);
        }

        $groups = DB::connection('sqlsrv')->select('select * from dbo.Grupos');//\App\Models\reports\Grupo::all();
           // dd($groups);
           return response()->json($groups);
        //return view('reports.grupo', compact('groups'));

    }
}
