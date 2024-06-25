<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DownloadController extends Controller
{
    public function get(Request $request)
    {
        if ($key = $request->query('saga')) {
            return Storage::download("manga-zip-by-saga/$key.zip");
        }

        $chapter = $this->getChapterFromQueryString($request);
        $chapterId = str_pad($chapter, 4, '0', STR_PAD_LEFT);

        return Storage::download("manga-zip/cap_$chapterId.zip");
    }

    public function list()
    {
        $chapters = config('one_piece.chapters');
        $sagas = config('one_piece.sagas');

        return view('pages.downloads', [
            'chapters' => $chapters,
            'sagas' => $sagas,
        ]);
    }
}
