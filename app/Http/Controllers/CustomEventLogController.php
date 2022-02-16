<?php

namespace App\Http\Controllers;

use App\Models\CustomEventLog;
use Illuminate\Http\Request;

class CustomEventLogController extends Controller
{
    public static function store( $table_name,$row_id, $tipo_operacion,$field,$old_value, $new_value){

        $registro = new CustomEventLog();
            $registro->table = $table_name;
            $registro->user_id = user_data()->id;
            $registro->company_id = user_data()->client_id;
            if (user_data()->sucursal_id != null) {
                $registro->sucursal_id = user_data()->sucursal_id;
                $registro->operador = user_data()->data['operador'];
                $registro->company_description = user_data()->data['company_description'];
            }else{
                $registro->sucursal_id = 10000;
                $registro->operador = '';
                $registro->company_description = '';
            }

            $registro->tipo_operacion = $tipo_operacion;

            $registro->old_value = $old_value;
            $registro->new_value = $new_value;
            $registro->field = $field;
            $registro->reg_id = $row_id;

            try {
                $registro->save();
                return $registro;
            } catch (\Throwable $th) {
                throw $th;
            }
    }
}
