<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomEventLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_event_logs', function (Blueprint $table) {
            $table->string('table');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('sucursal_id');
            $table->string('operador')->nullable();
            $table->string('company_description')->nullable();
            $table->string('old_value')->nullable();
            $table->string('new_value');
            $table->string('field')->nullable();
            $table->string('reg_id')->nullable();
            $table->string('tipo_operacion')->nullable();
            $table->id();
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
        Schema::dropIfExists('custom_event_logs');
    }
}
