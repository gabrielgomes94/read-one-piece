<?php

namespace Tests\Feature\Api;

use Tests\TestCase;

class OnePieceControllerTest extends TestCase
{
    public function test_should_get(): void
    {
        $directory = 'manga/cap_0001';
        $this->validateStorageDirectory($directory);

        $response = $this->get('/api/chapters/0001');

        $response->assertStatus(200);
        $response->assertJsonCount(62, 'images');
    }

    public function test_should_get_colored(): void
    {
        $directory = 'one_piece_colored/cap_1';
        $this->validateStorageDirectory($directory);

        $response = $this->get('/api/colored/chapters/0001');

        $response->assertStatus(200);
        $response->assertJsonCount(51, 'images');
    }

    public function test_should_list_cover_stories(): void
    {
        config(
            [
                'one_piece.chapters' => [
                    1 => 'Romance Dawn',
                    2 => 'O Garoto "Luffy do Chapéu de Palha"',
                    3 => 'Zoro, O Caçador de Piratas',
                ],
            ]
        );

        $response = $this->get('/api/chapters');

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
                'label' => "Capítulo 1 - Romance Dawn",
            ],
        );
    }
}
