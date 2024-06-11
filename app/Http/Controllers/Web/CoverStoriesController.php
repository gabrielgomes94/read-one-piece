<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class CoverStoriesController extends Controller
{
    public function get(Request $request): View
    {
        return view(
            'pages.cover-story',
            [
                'chapter' => $this->getChapterFromQueryString($request),
                'page' => $this->getPageFromQueryString($request),
            ]
        );
    }

    public function list(): View
    {
        return view(
            'pages.cover-stories',
            [
                'data' => config('one_piece.cover_stories') ?? [],
            ]
        );
    }
}
