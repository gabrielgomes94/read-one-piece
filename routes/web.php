<?php

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

Route::get('/manga', function () {
    return view('pages.manga');
});

Route::get(
    '/manga/{chapter?}/{page?}',
    function (?string $chapter = '1', ?string $page = '0') {
        return view('pages.manga', [
            'chapter' => $chapter,
            'page' => $page,
        ]);
    });

Route::get('/historias-de-capa', function () {
    return view('pages.cover-stories');
});

Route::get('/historias-de-capa/{id}', function (string $id) {
    return view('pages.cover-story', [
        'id' => $id,
    ]);
});
