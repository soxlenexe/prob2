<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\CustomEventLogController;
use App\Models\CustomEventLog;
use Illuminate\Support\Facades\DB;

class RollbackController extends Controller
{
    public static function undo(){
            RuntimeDatabaseController::setEnviron(user_data()->data['dns']);
            $event = CustomEventLog::where('user_id',user_data()->id)->orderBy('id')->get()->last();
            //cambio en DB por el valor nuevo
            $result = DB::connection('sqlsrv')->table($event->table)
                ->where('id', $event->reg_id)
                ->update([$event->field => $event->old_value]);
            //log
            CustomEventLogController::store($event->table, $event->reg_id ,"rollback", $event->field, $event->new_value, $event->old_value);
            return response()->json(['status' => $result]);
    }
}
