<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" id="csrf_token" content="{{ csrf_token() }}">

        <title>App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
        </style>

    </head>
    <body>
        <div id="app"></div>

        <script type="text/javascript">
          const user = @json($user);
        </script>
        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
    </body>
</html>
