<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cliente_descripcion' => 'nullable|max:255',
            'ultima_fecha_pago' => 'nullable|date',
            'motivo_baja_desc' => 'nullable|max:255',
            'activo' => 'nullable'

        ];
    }
}
