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

        foreach ($chapters as $key => $value) {
            $chapterCode = str_pad($key, 4, '0', STR_PAD_LEFT);

            $data[] = [
                'value' => $chapterCode,
                'label' => $value,
            ];
        }

        return new JsonResponse(['chapters' => $data ?? []]);
    }

    public function getCoverStory(string $id): JsonResponse
    {
        $images = Storage::files('cover-stories/' . $id . '/');

        $imagesPresented = collect($images)->map(function ($image) {
            $image = 'storage/' . $image;

            return asset($image);
        });

        return new JsonResponse(['images' => $imagesPresented]);
    }
}
