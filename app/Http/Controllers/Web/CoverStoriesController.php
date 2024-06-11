<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class CoverStoriesController extends Controller
{
    public function get(Request $request): View
    {
        $chapter = $this->getChapter($request);
        $page = $this->getPage($request);

        return view(
            'pages.cover-story',
            [
                'chapter' => $chapter,
                'page' => $page,
            ]
        );
    }

    public function list(): View
    {
        $chapters = config('one_piece.cover_stories');

        return view(
            'pages.cover-stories',
            [
                'data' => $chapters ?? [],
            ]
        );
    }

    private function getChapter(Request $request): int
    {
        return $request->query('chapter')
            ?? $request->query('capitulo')
            ?? 1;
    }

    private function getPage(Request $request): int
    {
        return $request->query('page')
            ?? $request->query('pagina')
            ?? 1;
    }
}
