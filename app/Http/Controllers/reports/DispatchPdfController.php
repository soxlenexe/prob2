<?php

namespace App\Http\Controllers\reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DispatchPdfController extends Controller
{
    public function dispatchPdf(Request $r, $report){
        $data = json_encode(['hasta' => $r->hasta,
            'desde' => $r->desde, 'caja' => $r->caja ,
            'tipo' => $r->tipo, 'medio' => $r->medio,
            'dns' => $r->dns, 'mode' => $r->mode,
            'operador' => $r->operador,
            'proveedor' => $r->proveedor,
            'report' => $r->report,
            'grupo' => $r->grupo,
            'filtered' => true
            ]);

        return view('ajax_report',compact('data'));
        }

    public function dispatchPdfPlane(Request $r,$report,  $dns, $mode){
        $data = json_encode(['filtered' => false , 'report' => $report, 'dns' => $dns, 'mode' => 'pdf']);
        return view('ajax_report',compact('data'));

    }
}
