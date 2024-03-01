<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class ChapterController extends Controller
{
    public function get(string $chapterId): JsonResponse
    {
        $images = Storage::files('public/manga/cap_' . $chapterId . '/');

        $imagesPresented = collect($images)->map(function ($image) {
            $image = preg_replace('/public/', 'storage', $image);

            return asset($image);
        });

        return new JsonResponse([
            'images' => $imagesPresented,
        ]);
    }

    public function listChapters(): JsonResponse
    {
        $chapters = config('one_piece.chapters');

        foreach ($chapters as $key => $value) {
            $data[] = [
                'value' => str_pad($key, 4, '0', STR_PAD_LEFT),
                'label' => $value,
            ];
        }

        return new JsonResponse([
            'chapters' => $data ?? [],
        ]);
    }
}
