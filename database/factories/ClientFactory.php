<?php

namespace Database\Factories;

use App\Models\Client;
use Facade\Ignition\Support\FakeComposer;
use Illuminate\Database\Eloquent\Factories\Factory;


class ClientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Client::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        return [
            'cliente_descripcion' => 'Desconocido',
            'ultima_fecha_pago' => '10/10/2021',
            'motivo_baja_desc' => 'desconocido',
            'admin_email' => 'admin@email.com'
        ];
    }
}
