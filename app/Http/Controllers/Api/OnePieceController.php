<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class OnePieceController extends Controller
{
    public function get(string $chapterId): JsonResponse
    {
        $directory = "manga/cap_$chapterId/";
        $images = Storage::files($directory);
        $imagesSorted = $this->sortImages($images, $directory);
        $imagesPresented = $this->presentImages($imagesSorted);

        return new JsonResponse(['images' => $imagesPresented]);
    }

    public function getColored(string $chapterId): JsonResponse
    {
        $chapterId = ltrim($chapterId, '0');
        $directory = "one_piece_colored/cap_$chapterId/";
        $images = Storage::files($directory);
        $imagesSorted = $this->sortImages($images, $directory);
        $imagesPresented = $this->presentImages($imagesSorted);

        return new JsonResponse(['images' => $imagesPresented]);
    }

    public function listChapters(): JsonResponse
    {
        $chapters = config('one_piece.chapters');

        foreach ($chapters as $key => $value) {
            $chapterCode = str_pad($key, 4, '0', STR_PAD_LEFT);

            $data[] = [
                'value' => $chapterCode,
                'label' => "Capítulo $key - " . $value,
            ];
        }

        return new JsonResponse(['chapters' => $data ?? []]);
    }
}
