<?php

namespace Tests\Feature\Web;

use Tests\TestCase;

class CoverStoriesController extends TestCase
{
    public function test_should_render_historia_de_capa_entry_point(): void
    {
        $response = $this->get('/historia-de-capa');

        $response->assertStatus(200);
    }

    public function test_should_render_historia_de_capa_entry_point_when_passed_query_parameters(): void
    {
        $response = $this->get('/historia-de-capa?capitulo=1&pagina=3');

        $response->assertStatus(200);
        $response->assertViewHas(['chapter', 'page']);
    }

    public function test_should_render_historias_de_capa_page_entry_point(): void
    {
        $response = $this->get('/historias-de-capa');

        $response->assertStatus(200);
        $response->assertViewHas('data');
    }
}
