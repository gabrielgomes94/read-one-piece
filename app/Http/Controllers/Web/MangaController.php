<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MangaController extends Controller
{
    public function get(Request $request): View
    {
        return view(
            'pages.manga',
            [
                'chapter' => $this->getChapterFromQueryString($request),
                'page' => $this->getPageFromQueryString($request),
            ]
        );
    }
}
