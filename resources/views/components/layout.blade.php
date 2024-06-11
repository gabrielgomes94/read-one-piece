<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Leia One Piece</title>
        <link rel="icon" href="{{ url('favicon.ico') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        @viteReactRefresh
        @vite('resources/js/app.jsx')
    </head>

    <body class="antialiased min-h-screen
                bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100"
          style="
              min-height: 100vh;
              display: grid;
              grid-template-rows: 1fr auto;
          "
    >
        <div class="relative">
            <div class="">
                <x-header />
            </div>

            <div id="slot-container" class="pb-2" style="
            /*margin-top: auto;*/
            /*height: 1800px;*/
            /*min-height: 100vh;*/
            ">
                {{ $slot }}
            </div>


            <div class="w-full"
            style="grid-row-start: 2;
  grid-row-end: 3;"
            >
                <x-footer />
            </div>
        </div>
    </body>
</html>
