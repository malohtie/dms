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
    //Authentication, middleware sanctum
    Route::prefix('auth')->middleware('auth:sanctum')->group(function () {
        Route::post('/login', 'AuthController@login')->name('auth.login')->withoutMiddleware('auth:sanctum');
        Route::post('/logout', 'AuthController@logout')->name('auth.logout');
        Route::get('/check', 'AuthController@check')->name('auth.check');
        Route::get('/user', 'AuthController@user')->name('auth.user');
    });

});
//fallback all requests to 404 if not found
Route::fallback(function(){
    return response()->json(['error' => 'API NOT FOUND'], 404);
});
