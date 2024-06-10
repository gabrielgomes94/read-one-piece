<?php

use App\Http\Controllers\Api\CoverStoriesController;
use App\Http\Controllers\Api\OnePieceController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/chapters/{chapter_id}', [OnePieceController::class, 'get']);
Route::get('/chapters', [OnePieceController::class, 'listChapters']);
Route::get('/colored/chapters/{chapter_id}', [OnePieceController::class, 'getColored']);
Route::get('/cover-stories', [CoverStoriesController::class, 'listCoverStories']);
Route::get('/cover-stories/{id}', [CoverStoriesController::class, 'getCoverStory']);
//Route::get('/sbs', [ChapterController::class, 'listSbs']);
