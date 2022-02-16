<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function deleteUser($id){
        return User::find($id)->delete();
    }

    public function getUserDetail($id){
        $user = User::find($id);
        return $user;
    }

    public function getUsers(){
        $users = User::with('roles')->get();
        return $users;
    }

    public function updateUser(Request $request, $id){
        $user = User::find($id);
        $user->name  = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->client_id = $request->input('client_id');
        $user->sucursal_id = $request->input('sucursal_id');
        $user->save();
        return $user;
     }

     public function addRoleToUser($id, $role){
        $user = User::find($id);
        $user->assignRole($role);
        return $user;
     }
}

