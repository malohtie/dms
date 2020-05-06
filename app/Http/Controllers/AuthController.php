<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function user(Request $request)
    {
        return $request->user();
    }

    /**
     * Login User
     * @param UserLoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(UserLoginRequest $request)
    {
        $isLogged = auth()->attempt($request->only('username', 'password'), $request->remember);
        return response()->json([
            'status' => $isLogged,
            'user' => auth()->user()
        ]);
    }

    /**
     * Logout Connected User
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(null, 204);
    }
}
