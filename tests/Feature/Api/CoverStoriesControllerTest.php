<?php

namespace Tests\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use RuntimeException;
use Tests\TestCase;

class CoverStoriesControllerTest extends TestCase
{
    public function test_should_list_cover_stories(): void
    {
        config(
            [
                'one_piece.cover_stories' => [
                    [
                        'id' => 1,
                        'name' => "Buggy's Crew Adventure Chronicles",
                        'cover' => 'https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/5d871987bfdd4140958432303170868a/01.png',
                    ],
                    [
                        'id' => 2,
                        'name' => 'Diary of Koby-Meppo',
                        'cover' => 'https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/63de184e09dc5a7af978df1dbe07df4f/01.png',
                    ],
                    [
                        'id' => 3,
                        'name' => "Jango's Dance Paradise",
                        'cover' => 'https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/63de184e09dc5a7af978df1dbe07df4f/01.png',
                    ],
                ],
            ]
        );

        $response = $this->get('/api/cover-stories');

        $response->assertStatus(200);
        $response->assertJsonCount(3, 'chapters');
        $response->assertJsonStructure(
            [
                'chapters' => [
                    [
                        'value',
                        'label'
                    ],
                ],
            ]
        );
        $response->assertJsonFragment(
            [
                'value' => '0001',
                'label' => "Buggy's Crew Adventure Chronicles",
            ],
        );
    }

    public function test_should_get_cover_stories(): void
    {
        $directory = 'cover-stories/0001 - buggy';
        $this->validateStorageDirectory($directory);

        $response = $this->get('/api/cover-stories/0001');

        $response->assertStatus(200);
        $response->assertJsonCount(28, 'images');
    }
}
