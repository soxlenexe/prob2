<?php

namespace App\Http\Controllers;

use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function newRole($role){
        if (auth()->user()->can('create role')) {
           $role = Role::create(['name' => $role]);
            return $role;
        }

    }

    public function deleteRole($id){
        Role::find($id)->delete();
        return redirect('/api/roles');
    }

    public function updateRole(Request $request,$id){
        $role = Role::find($id);
        $role->name = $request->input('name');
        $role->save();
        return $role;
    }

    public function getRoleList(){

        $roles = Role::with('permissions')->get();
        return $roles;

    }
    public function createPermission(){
        return ;
    }

    public function assingnPermission(){
        return;
    }

    public function deletePermission(){
        return;
    }




}
