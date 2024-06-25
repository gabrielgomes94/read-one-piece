<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class CoverStoriesController extends Controller
{
    public function listCoverStories(): JsonResponse
    {
        $chapters = config('one_piece.cover_stories');

        foreach ($chapters as $value) {
            $chapterCode = str_pad($value['id'], 4, '0', STR_PAD_LEFT);

            $data[] = [
                'value' => $chapterCode,
                'label' => $value['name'],
            ];
        }

        return new JsonResponse(['chapters' => $data ?? []]);
    }

    public function getCoverStory(string $id): JsonResponse
    {
        $directory = preg_grep("/.$id./", Storage::directories('cover-stories'));
        $directory = array_shift($directory);
        $images = Storage::files($directory);
        $imagesSorted = $this->sortImages($images, $directory);
        $imagesPresented = $this->presentImages($imagesSorted);

        return new JsonResponse(['images' => $imagesPresented]);
    }
}
