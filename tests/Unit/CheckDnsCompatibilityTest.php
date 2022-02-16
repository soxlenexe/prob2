<?php

namespace Tests\Unit;

use App\Http\Controllers\ServiceController;
use Tests\TestCase;

class CheckDnsCompatibilityTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_db_compatibility()
    {
        $result = ServiceController::checkDbCompatibility('194.163.145.107',1);

        $this->assertTrue($result);
    }
}
