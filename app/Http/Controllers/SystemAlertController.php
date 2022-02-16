<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\SystemAlert;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

class SystemAlertController extends Controller
{
    use HasRoles;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $notificaciones = SystemAlert::all();
       return $notificaciones;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->hasRole('admin')) {
            $clientes = Client::all();
            $notificaciones = SystemAlert::orderBy('created_at', 'desc')->limit(10)->get();
            return view('admin.alerts.create', compact('clientes','notificaciones'));
        }
        return redirect('/dashboard');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $alert = new SystemAlert();
        $alert->string = $request->input('string');
        $alert->user_id = $request->input('user_id');
        $alert->priority = $request->input('priority');
        $alert->severity = $request->input('severity');
        $alert->visited = boolval($request->input('visited'));
        $alert->role = $request->input('role');
        $alert->save();
        return redirect('/dashboard');
    }

    public function storeFromService($data){
        $alert = new SystemAlert();
        $alert->string = $data->string;
        $alert->user_id = $data->user_id;
        $alert->save();
        return response()->json(['status' => 'created']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getList($id){
        return SystemAlert::where('user_id', $id)->orderBy('created_at', 'desc')->limit(10)->get();
    }

    public function updateStatus($id){
        $notificaciones = SystemAlert::where('user_id', $id)->get();
        foreach ($notificaciones as $noti) {
            $noti->visited = 1;
            $noti->save();
        }
        return $notificaciones;
    }
}
