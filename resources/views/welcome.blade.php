<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Leia One Piece</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        @viteReactRefresh
        @vite('resources/js/app.jsx')
    </head>
    <body class="antialiased max-h-fit bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 p-8">
        <div id="manga">
        </div>
    </body>
</html>
