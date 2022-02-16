<?php

namespace App\Http\Controllers\backups;

use App\Http\Controllers\Controller;
use App\Http\Controllers\RuntimeDatabaseController;
use App\Models\BackupArticulos;
use App\Models\remote\Articulo;
use App\Models\Sucursal;
use Error;
use Illuminate\Http\Request;


class BackupController extends Controller
{
    public function articulosBackup($dns = null){
        RuntimeDatabaseController::setEnviron($dns);
        //return $dns;
        $articulos = Articulo::all();
        //return $articulos[0];
        $suc_id = Sucursal::where('dns', $dns)->get('id');

        $res = $this->storeDbBackup($articulos, $suc_id[0]);

        return response()->json(['status' => 'created', 'date' => date_formatted($res[0], 'd/m/Y h:i:s'), 'oldies' => $res[1]]);
    }

    private function storeDbBackup($data, $suc){
        $reg = new BackupArticulos();
        $reg->data = $data->toJson();
        $reg->sucursal_id = $suc->id;
        $reg->save();
        $total_reg = BackupArticulos::where('sucursal_id', $suc->id)->count();
        $oldies = 0;
        if ($total_reg >= 6) {
            $oldies  = BackupArticulos::where('sucursal_id', $suc->id)->orderBy('created_at', 'asc')->first()->delete();
        }
        return [$reg->created_at, $oldies];

    }

    public function getArticulosBackups($dns = null){
        $suc_id = Sucursal::where('dns', $dns)->get('id');
        $backups = BackupArticulos::where('sucursal_id', $suc_id[0]->id)->orderBy('created_at', 'desc')->limit(5)->get(['created_at','id']);

        $backups = $backups->map(function($b){
            return ['created_at' => date_formatted($b->created_at, 'd/m/Y h:i:s'), 'id' => $b->id];
        });
        return response()->json(['points' => $backups]);
    }

    public function restoreBackup(Request $request){
        $backup = BackupArticulos::find($request->id);
        $result = $this->processBackup($backup->data, $request->dns);
        return response()->json($result);
    }

    private function processBackup($data, $dns){
        RuntimeDatabaseController::setEnviron($dns);

        $decoded_data = collect(json_decode($data));
        try {
           foreach ($decoded_data as $old) {

             Articulo::where( 'Codigo', '=', strval($old->Codigo)  )->update([
                 'L1' => $old->L1,
                 'L2' => $old->L2,
                 'L3' => $old->L3,
                 'Costo' => $old->Costo,
                 'rentabilidad' => $old->rentabilidad
                ]);
            }

        } catch (Error $th) {
            return $th;
        }
        return true;

    }
}
