<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Storage;
use RuntimeException;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function validateStorageDirectory(string $directory): void
    {
        if (!Storage::has($directory)) {
            throw new RuntimeException(
                "This test must have a directory called $directory on public storage"
            );
        }
    }
}
