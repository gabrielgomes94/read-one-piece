<x-layout>
    <div id="manga" class="px-8 my-8"></div>

    <div id="manga-data"
         data-chapter="{{ $chapter ?? null }}"
         data-page="{{ $page ?? null }}"
    ></div>
</x-layout>
