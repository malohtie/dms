<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('v1')->group(function () {
    //Authentication
    Route::prefix('auth')->group(function () {
        Route::post('/login', 'AuthController@login');
        Route::post('/logout', 'AuthController@logout');
        Route::get('/user', 'AuthController@user')->middleware('auth:sanctum'); //allow only authenticated user
    });

});

//fallback all requests to 404 if not found
Route::fallback(function(){
    return response()->json(['error' => 'API NOT FOUND'], 404);
});
