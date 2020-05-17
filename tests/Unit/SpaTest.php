<?php

namespace Tests\Unit;

use Tests\TestCase;

class SpaTest extends TestCase
{
    /**
     * Index Vue Page.
     */

    public function testIndex()
    {
        $response = $this->get('/');
        $response->assertOk()->assertSeeText("sorry");
    }
}
