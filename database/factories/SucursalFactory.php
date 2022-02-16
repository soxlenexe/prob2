<?php

namespace Database\Factories;

use App\Models\Sucursal;
use Illuminate\Database\Eloquent\Factories\Factory;

class SucursalFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Sucursal::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'sucursal_descripcion' => 'cucursal Palermo',
            'dns' => 'asdm132m123m123m123ñ12312', 
            'cliente_id' => rand(1,10)
        ];
    }
}
