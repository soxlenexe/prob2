<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;

class PlanCreationTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_creation_plan()
    {
        $user = User::find(1);
        $response = $this->actingAs($user)->post('/plans',[
            'name' => 'basico-test',
            'pcs' => 2,
            'suc_qty' => 2

        ]);
        $response->assertStatus(200);
    }
}
