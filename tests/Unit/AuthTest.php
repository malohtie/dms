<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase, withFaker;

    /**
     * Login test
     */
    public function testLogin()
    {
        $user = factory(User::class)->create();
        //validation
        $this->post(route('auth.login'), [
            'username' => $user->username,
            'password' => 'password',
        ], [
            'Accept' => 'application/json',
        ])->assertStatus(422)->assertJsonCount(2);
        //wrong credentials
        $this->post(route('auth.login'), [
            'username' => $user->username,
            'password' => 'wrong_password',
            'remember' => $this->faker->boolean()
        ], [
            'Accept' => 'application/json',
        ])->assertOk()->assertJson([
            'status' => false,
            'user' => null
        ]);
        //logged
        $this->post(route('auth.login'), [
            'username' => $user->username,
            'password' => 'password',
            'remember' => $this->faker->boolean()
        ], [
            'Accept' => 'application/json',
        ])->assertOk()->assertJson([
            'status' => true,
            'user' => $user->toArray()
        ]);
        $this->assertAuthenticatedAs($user);

    }

    /**
     * Logout Test
     */
    public function testLogout()
    {
        $user = factory(User::class)->create();

        $this->post(route('auth.logout'), [], [
            'Accept' => 'application/json',
        ])->assertUnauthorized();

        Sanctum::actingAs($user);
        $this->assertAuthenticatedAs($user);
        $this->post(route('auth.logout'), [], [
            'Accept' => 'application/json',
        ])->assertNoContent($status = 204);
    }

    /**
     * Test Get User
     */
    public function testUser()
    {
        $user = factory(User::class)->create();
        $this->get(route('auth.user'), [
            'Accept' => 'application/json',
        ])->assertUnauthorized();

        Sanctum::actingAs($user);
        $this->get(route('auth.user'), [
            'Accept' => 'application/json',
        ])->assertOk()->assertJson($user->toArray());
    }
}
