<?php

use App\Http\Controllers\Web\CoverStoriesController;
use App\Http\Controllers\Web\DownloadController;
use App\Http\Controllers\Web\MangaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect('/manga');
});

Route::get('/manga', [MangaController::class, 'get']);

Route::get('/historias-de-capa', [CoverStoriesController::class, 'list']);

Route::get('/historia-de-capa', [CoverStoriesController::class, 'get']);
Route::get('/download', [DownloadController::class, 'get']);
Route::get('/downloads', [DownloadController::class, 'list']);
