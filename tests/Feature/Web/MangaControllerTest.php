<?php

namespace Tests\Feature\Web;

use Tests\TestCase;

class MangaControllerTest extends TestCase
{
    public function test_should_render_manga_entry_point(): void
    {
        $response = $this->get('/manga');

        $response->assertStatus(200);
    }

    public function test_should_render_manga_entry_point_when_passed_query_parameters(): void
    {
        $response = $this->get('/manga?capitulo=1&pagina=3');

        $response->assertStatus(200);
        $response->assertViewHas(['chapter', 'page']);
    }
}
