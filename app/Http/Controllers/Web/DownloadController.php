<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use RuntimeException;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Throwable;
use ZipArchive;

class DownloadController extends Controller
{
    public function get(Request $request): BinaryFileResponse|string
    {
        try {
            $chapter = $this->getChapterFromQueryString($request);
            $chapterId = str_pad($chapter, 4, '0', STR_PAD_LEFT);
            $fileZip = $this->createZip($chapterId);

            return response()->download(public_path($fileZip))
                ->deleteFileAfterSend();
        } catch (Throwable) {
            return redirect();
        }
    }

    private function createZip(string $chapterId): string
    {
        $zip = new ZipArchive();
        $zipFileName = "one-piece-$chapterId.zip";
        $directory = "app/public/manga/cap_$chapterId/";
        $files = File::files(storage_path($directory));

        if ($zip->open(public_path($zipFileName), ZipArchive::CREATE) === TRUE) {
            foreach ($files ?? [] as $image) {
                $zip->addFile($image, basename($image));
            }

            $zip->close();

            return $zipFileName;
        }

        throw new RuntimeException('Erro ao criar o arquivo ZIP');
    }
}
