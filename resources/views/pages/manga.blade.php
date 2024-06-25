<x-layout>
    <div id="manga"></div>

    <div id="manga-data"
         data-chapter="{{ $chapter ?? null }}"
         data-page="{{ $page ?? null }}"
         data-colored="{{ $colored ?? false }}"
    ></div>
</x-layout>
