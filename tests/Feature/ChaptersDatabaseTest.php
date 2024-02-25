<?php

namespace Feature;

use Exception;
use Illuminate\Support\Facades\Storage;
use PHPUnit\Framework\Assert as PHPUnit;
use Tests\TestCase;

class ChaptersDatabaseTest extends TestCase
{
    const TOTAL_CHAPTERS = 1108;
    public function testChaptersNamesInStorage(): void
    {
        echo PHP_EOL . 'testChaptersNamesInStorage' . PHP_EOL;
        $chapters = config('one_piece.chapters');

        $this->assertCount(self::TOTAL_CHAPTERS, $chapters, $this->getMessage($chapters));
        $this->validate($chapters);

        echo 'SUCCESS!';
    }

    public function testChaptersDirectoriesInStorage(): void
    {
        echo PHP_EOL . 'testChaptersDirectoriesInStorage' . PHP_EOL;
        $chapters = Storage::directories('public');
        sort($chapters);

        foreach ($chapters as $chapter) {
            $mappedChapters[] = str_replace('public/cap_', '', $chapter);
        }

        sort($mappedChapters);
        $mappedChapters = array_flip($mappedChapters);

        foreach ($chapters as $chapter) {
            $this->assertDirectoryNotEmpty($chapter);
        }
        $this->validate($mappedChapters);
        $this->assertCount(self::TOTAL_CHAPTERS, $mappedChapters, $this->getMessage($chapters));

        echo 'SUCCESS!' . PHP_EOL;
    }

    private function validate(array $chapters): void
    {
        $count = 0;

        foreach ($chapters as $number => $name) {
            if ($count != $number) {
                echo PHP_EOL . "Capítulo ausente: " . $count . PHP_EOL;
                return;
            }

            $count++;
        }
    }

    public function getMessage(array $chapters): string
    {
        return "You must add " . self::TOTAL_CHAPTERS - count($chapters) . " chapters entries";
    }

    public function assertDirectoryNotEmpty($path)
    {
        PHPUnit::assertNotEmpty(
            Storage::allFiles($path), "Directory [{$path}] is empty."
        );

        return $this;
    }
}
