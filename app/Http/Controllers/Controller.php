<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected function sortImages(array $images, string $directory): array
    {
        $images = collect($images)
            ->sortBy(
                function ($image, $key) use ($directory) {
                    $chapter = Str::remove($directory, $image);
                    $chapter = preg_replace('/[^0-9]/', '', $chapter);

                    return (int) $chapter;
                })
            ->toArray();

        foreach ($images as $image) {
            $imagesSorted[] = $image;
        }

        return $imagesSorted ?? [];
    }

    protected function getChapterFromQueryString(Request $request): int
    {
        return $request->query('chapter')
            ?? $request->query('capitulo')
            ?? 1;
    }

    protected function getPageFromQueryString(Request $request): int
    {
        return $request->query('page')
            ?? $request->query('pagina')
            ?? 1;
    }

    protected function presentImages(array $imagesSorted): Collection
    {
        return  collect($imagesSorted)->map(function ($image) {
            $image = 'storage/' . $image;

            return asset($image);
        });
    }
}
