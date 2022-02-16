<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Client::factory(11)->create();
        // \App\Models\Sucursal::factory(8)->create();
        // \App\Models\User::factory(10)->create();

        //superuser
        $user = new  \App\Models\User([
            'name' => 'Digital Crams',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin123'),
            'email_verified_at' => Carbon::now()
        ]);
        $user->save();
        $user3 = new  \App\Models\User([
            'name' => 'Digital Crams-Operador 2',
            'email' => 'admin2@admin.com',
            'password' => Hash::make('admin123'),
            'email_verified_at' => Carbon::now()
        ]);
        $user3->save();
        $user2 = new  \App\Models\User([
            'name' => 'Digital Crams-Operador 1',
            'email' => 'admin1@admin.com',
            'password' => Hash::make('admin123'),
            'email_verified_at' => Carbon::now()
        ]);
        $user2->save();


        //roles
        $admin = Role::create(['name' => 'admin']);
        $client = Role::create(['name' => 'client']);
        $rol_empleado = Role::create(['name' => 'empleado']);
        $rol_gerente = Role::create(['name' => 'gerente']);
        //planes

        DB::table('plans')->insert([
            'name' => 'basico-3',
            'suc_qty' => 3,
            'pcs' => 3
            ]);
        DB::table('plans')->insert([
            'name' => 'basico-5',
            'suc_qty' => 5,
            'pcs' => 5
            ]);
        DB::table('plans')->insert([
            'name' => 'basico-1',
            'suc_qty' => 1
            ]);
        //permisos
        $can_create_suc = Permission::create(['name' => 'create sucursal']);
        $can_assign_user = Permission::create(['name' => 'assign user']);
        Permission::create(['name' => 'create role']);
        Permission::create(['name' => 'create permission']);
        Permission::create(['name' => 'create client']);
        Permission::create(['name' => 'create user']);

        $edit_ariculos =Permission::create(['name' => 'edit articulos']);
        $show_articulos = Permission::create(['name' => 'show articulos']);
        $edit_grupos = Permission::create(['name' => 'edit grupos']);
        $show_grupos = Permission::create(['name' => 'show grupos']);
        $edit_stock = Permission::create(['name' => 'edit stock']);
        $show_stock = Permission::create(['name' => 'show stock']);
        $edit_marcas = Permission::create(['name' => 'edit marcas']);
        $show_marcas = Permission::create(['name' => 'show marcas']);
        $edit_cliente_consumidor = Permission::create(['name' => 'edit cliente_consumidor']);
        $show_cliente_consumidor = Permission::create(['name' => 'show cliente_consumidor']);
        $edit_medios_pago = Permission::create(['name' => 'edit medios_pago']);
        $show_medios_pago = Permission::create(['name' => 'show medios_pago']);
        $edit_cuenta_corriente = Permission::create(['name' => 'edit cuenta_corriente']);
        $show_cuenta_corriente = Permission::create(['name' => 'show cuenta_corriente']);
        $edit_proveedores = Permission::create(['name' => 'edit proveedores']);
        $show_proveedores = Permission::create(['name' => 'show proveedores']);
        $edit_promociones = Permission::create(['name' => 'edit promociones']);
        $show_promociones = Permission::create(['name' => 'show promociones']);

        //assign perm to role
        $admin->givePermissionTo(Permission::all());
        $client->givePermissionTo([$can_create_suc, $can_assign_user]);
        $user->assignRole('admin');
        $user2->assignRole('admin');
        $user3->assignRole('admin');
        $rol_gerente->givePermissionTo([
            $edit_ariculos,
            $show_articulos,
            $edit_grupos,
            $show_grupos,
            $edit_stock,
            $show_stock,
            $edit_marcas,
            $show_marcas,
            $edit_cliente_consumidor,
            $show_cliente_consumidor,
            $edit_medios_pago,
            $show_medios_pago,
            $edit_cuenta_corriente,
            $show_cuenta_corriente,
            $edit_proveedores,
            $show_proveedores,
            $edit_promociones,
            $show_promociones
        ]);
    }
}
