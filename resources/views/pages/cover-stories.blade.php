<x-layout>
    <div id="cover-stories" class="p-8"></div>

    <main>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 m-8">
            @foreach($data as $coverStory)
                <a href="/historia-de-capa?capitulo={{ $coverStory['id'] }}">
                    <div class="rounded overflow-hidden shadow-lg
                                md:max-w-sm md:min-w-sm h-full
                                my-4 pb-4 bg-white
                                flex flex-col justify-between"
                    >
                        <img
                            src={{ $coverStory['cover'] }}
                            class="w-full"
                        />

                        <h1 class="font-sans text-lg text-pretty px-4 m-1">
                            {{ $coverStory['name'] }}
                        </h1>
                    </div>
                </a>
            @endforeach
        </div>
    </main>
</x-layout>
