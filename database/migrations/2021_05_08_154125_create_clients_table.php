<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->text('cliente_descripcion')->nullable();
            $table->string('ultima_fecha_pago')->nullable();
            $table->string('motivo_baja_desc')->nullable();
            $table->boolean('activo')->default(1);
            $table->string('admin_email')->unique();
            $table->string('vencimiento');
            $table->integer('plan_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
