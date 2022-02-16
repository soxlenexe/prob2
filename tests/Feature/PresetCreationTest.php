<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Preset;

class PresetCreationTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_insert_presets_to_user()
    {
        $preset = new Preset();
        $preset->user_id = 4;
        $preset->preset_1 =  "{label:'Modificado', value:'modificado'},
        {label:'Grupo', value:'grupo'},
        {label: 'Costo', value:'costo'},
        {label:'L1', value:'l1'},
        {label:'L2', value:'l2'},
        {label:'L3', value:'l3'},
        {label:'Rentabilidad', value:'rentabilidad'}";
        $res = $preset->save();
        //$del = $preset->delete();


        $this->assertTrue($res);
    }
}
