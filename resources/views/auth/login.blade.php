<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link id="theme-css" rel="stylesheet" type="text/css" href="{{asset('assets/theme/theme-blue.css')}}">
	<link id="layout-css" rel="stylesheet" type="text/css" href="{{asset('assets/layout/css/layout-blue.css')}}">
    <link rel="stylesheet" href="{{asset('css/global/main-nav.css')}}">
    <link rel="stylesheet" href="{{asset('css/global/login.css')}}">

</head>
<body>
    <div id="app-wrapper">


    <div id="app">
<login></login>
    </div>
</div>
</body>
</html>

