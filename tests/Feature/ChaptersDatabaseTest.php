<?php

namespace Feature;

use Exception;
use Illuminate\Support\Facades\Storage;
use PHPUnit\Framework\Assert as PHPUnit;
use Tests\TestCase;

class ChaptersDatabaseTest extends TestCase
{
    const TOTAL_CHAPTERS = 1109;
    public function test_chapters_names_in_storage(): void
    {
        $chapters = config('one_piece.chapters');
        $this->validate($chapters);

        $this->assertCount(self::TOTAL_CHAPTERS, $chapters, $this->getMessage($chapters));
    }

    public function test_chapters_directories_in_storage(): void
    {
        echo PHP_EOL . 'testChaptersDirectoriesInStorage' . PHP_EOL;
        $chapters = Storage::directories('public');
        sort($chapters);

        foreach ($chapters as $chapter) {
            $mappedChapters[] = str_replace('public/cap_', '', $chapter);
        }

        sort($mappedChapters);
        $mappedChapters = array_flip($mappedChapters);
        $this->validate($mappedChapters);

        $this->assertDirectoriesNotEmpty($chapters);
        $this->assertCount(self::TOTAL_CHAPTERS, $mappedChapters, $this->getMessage($chapters));
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

    public function assertDirectoriesNotEmpty(array $chapters): void
    {
        foreach ($chapters as $chapter) {
            PHPUnit::assertNotEmpty(
                Storage::allFiles($chapter), "Directory [{$chapter}] is empty."
            );
        }
    }
}
