<x-layout>
    <div id="manga"></div>

    <div id="manga-data"
         data-chapter="{{ $chapter ?? null }}"
         data-page="{{ $page ?? null }}"
    ></div>
</x-layout>
