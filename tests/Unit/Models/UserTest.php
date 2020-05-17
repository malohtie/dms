<?php

namespace Tests\Unit\Models;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Insert User Test
     */
    public function testInsert()
    {
        $user = factory(User::class, 1000)->create();
        $this->assertDatabaseHas('users', ['id' => $user[0]->id]);
        $this->assertEquals(1000, User::all()->count());
    }

    /**
     * Edit User Test
     */
    public function testEdit()
    {
        $user = factory(User::class)->create();
        $user->username = 'Amine';
        $user->save();
        $this->assertDatabaseHas('users', ['id' => $user->id, 'username' => $user->username]);
    }

    /**
     * Delete UserName
     */
    public function testDelete()
    {
        $user = factory(User::class)->create();
        $this->assertDeleted('users', $user->toArray());
    }

    /**
     * Active, Deactivate User
     */
    public function testActiveUser()
    {
        $user = factory(User::class)->create();
        $user->is_active = false;
        $user->save();
        $this->assertDatabaseHas('users', ['id' => $user->id, 'is_active' => false]);
        $user->is_active = true;
        $user->save();
        $this->assertDatabaseHas('users', ['id' => $user->id, 'is_active' => true]);

    }

    /**
     * Get User By His Username
     */
    public function testGetUser()
    {
        $user = factory(User::class)->create();
        $result = User::getUser($user->username);
        $this->assertEquals($result->username, $user->username);
    }
}
