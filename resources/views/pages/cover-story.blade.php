<x-layout>
    <div id="cover-story"></div>
    <div id="manga-data" class="p-8"
         data-chapter="{{ $chapter ?? null }}"
         data-page="{{ $page ?? null }}"
    ></div>
</x-layout>
