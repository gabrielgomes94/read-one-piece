<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ChapterController extends Controller
{
    public function get(string $chapterId): JsonResponse
    {
        $images = Storage::files('manga/cap_' . $chapterId . '/');

        $images = collect($images)->sortBy(function ($image, $key) use ($chapterId) {
            $v = Str::remove('manga/cap_' . $chapterId . '/', $image);
            $v = preg_replace('/\..+/', '', $v);

            return (int) $v;
        })->toArray();

        foreach ($images as $image){
            $imagesSorted[] = $image;
        }

        $imagesPresented = collect($imagesSorted ?? [])->map(function ($image) {
            $image = 'storage/' . $image;

            return asset($image);
        });

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
