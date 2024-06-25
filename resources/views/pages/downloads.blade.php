<x-layout>

    <div class="
        m-8 p-8
        bg-white rounded shadow-2xl"
    >
        <div class="my-4">
            <h1 class="text-2xl">Download por saga</h1>
            <div class="
                flex flex-col
                divide-y divide-slate-400
                w-100
            ">
                @foreach($sagas as $key => $saga)
                    <div class="flex flex-row justify-between p-2">
                        <span>
                            {{ $saga['title'] }}
                        </span>

                        <span class="flex flex-row">
                            {{ $saga['begin'] . ' até ' . $saga['end'] }}

                            <a href="download?saga={{$key}}">
                                <img src="icons/download.svg" />
                            </a>
                        </span>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="my-4">
            <h1 class="text-2xl">Download por capítulo</h1>

            <div class="
                flex flex-col
                divide-y divide-slate-400
                w-100
            ">
                @foreach($chapters as $number => $title)
                    <div class="flex flex-row justify-between p-2">

                        Capítulo {{ $number }} -  {{ $title }}

                        <a href="download?chapter={{$number}}">
                            <img src="icons/download.svg" />
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</x-layout>
