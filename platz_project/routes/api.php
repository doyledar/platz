<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Categories;
use App\Http\Controllers\Ressources;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// API des Categories
// CTRL : Categories
Route::resource('categories', Categories::class)->except(['show', 'create', 'edit']);

// API des Ressources
// CTRL : Ressources
Route::resource('ressources', Ressources::class)->except(['show', 'create', 'edit']);
