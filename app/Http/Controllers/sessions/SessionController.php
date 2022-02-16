<?php

namespace App\Http\Controllers\sessions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;


class SessionController extends Controller
{
    use HasRoles;

    public  function getSessions() {
        if ( Auth::user()->hasRole('admin') ) {

            $sessions = DB::table('sessions')
                ->orderBy('last_activity', 'DESC')
                ->get();
            return view('admin.sessions', ['sessions' => $sessions]);
            //return response()->json($sessions);
        }
        return response("Acceso denegado", 403);
    }

    public function deleteSession(Request $request) {
        if ( Auth::user()->hasRole('admin') ) {
        DB::table('sessions')
            ->where('id','fcPk3icVA2Wovn9RyoszoJ92OYYutNYUTUzh5LoT')
            ->where('user_id', 4)
            ->delete();
        }
        return response("Acceso denegado", 403);
    }
}
