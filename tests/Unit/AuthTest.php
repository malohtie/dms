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
        $this->json('post', route('auth.login'), [
            'username' => $user->username,
            'password' => 'password',
        ])->assertStatus(422)->assertJsonCount(2);
        //wrong credentials
        $this->json('post',route('auth.login'), [
            'username' => $user->username,
            'password' => 'wrong_password',
            'remember' => $this->faker->boolean()
        ])->assertOk()->assertJson([
            'status' => false,
            'user' => null
        ]);
        //logged
        $this->json('post', route('auth.login'), [
            'username' => $user->username,
            'password' => 'password',
            'remember' => $this->faker->boolean()
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
        $this->json('post',route('auth.logout'))->assertUnauthorized();

        Sanctum::actingAs($user);
        $this->assertAuthenticatedAs($user);
        $this->json('post',route('auth.logout'))->assertNoContent($status = 204);
    }

    /**
     * Test Get User
     */
    public function testUser()
    {
        $user = factory(User::class)->create();
        $this->json('get',route('auth.user'))->assertUnauthorized();

        Sanctum::actingAs($user);
        $this->json('get',route('auth.user'))->assertOk()->assertJson($user->toArray());
    }
}
