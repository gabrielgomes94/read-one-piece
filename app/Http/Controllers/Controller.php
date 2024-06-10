<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Str;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected function sortImages(array $images, string $directory): array
    {
        $images = collect($images)
            ->sortBy(
                function ($image, $key) use ($directory) {
                    $v = Str::remove($directory, $image);
                    $v = preg_replace('/\..+/', '', $v);

                    return (int) $v;
                })
            ->toArray();

        foreach ($images as $image){
            $imagesSorted[] = $image;
        }

        return  $imagesSorted ?? [];
    }
}
