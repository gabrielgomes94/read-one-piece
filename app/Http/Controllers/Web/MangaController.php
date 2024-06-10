<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class MangaController extends Controller
{
    public function get(Request $request): View
    {
        $chapter = $this->getChapter($request);
        $page = $this->getPage($request);

        return view('pages.manga', [
            'chapter' => $chapter,
            'page' => $page,
        ]);
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
