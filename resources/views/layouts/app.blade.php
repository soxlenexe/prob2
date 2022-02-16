<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ ltrim(asset('css/app.css')),'/' }}" rel="stylesheet">
    <link id="theme-css" rel="stylesheet" type="text/css" href="{{asset('assets/theme/theme-blue.css')}}">
	<link id="layout-css" rel="stylesheet" type="text/css" href="{{asset('assets/layout/css/layout-blue.css')}}">
    <link rel="stylesheet" href="{{asset('css/global/main-nav.css')}}">


</head>
<body>
    <div id="app">
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark shadow-sm ">
            <div class="container-menubar">


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li><a href="{{url('/')}}"> <img src="{{asset('assets/layout/images/LOGO-FINAL.png')}}" alt="" width="140"></a></li>
                        <li class="ml-5">
                        @role('client')
                        <app-nav-bar role="client" user_id="{{Auth::id()}}" company="{{Auth::user()->client_id}}"></app-nav-bar>
                        @endrole
                        @role('admin')
                        <app-nav-bar role="admin" user_id="{{Auth::id()}}"></app-nav-bar>
                        @endrole
                        @role('empleado')
                        <app-nav-bar role="empleado" sucursal_active="{{user_data()->data['sucursal_status']}}" server_on = {{ dbCheck(user_data()->data['dns']) }}></app-nav-bar>
                        @endrole
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest

                        @else
                            <li class="nav-item dropdown">


                            </li>

                        @endguest

                        <li>
                          <span class="pr-4" style="color: rgb(216, 213, 213)"><span class="pr-2"><i class="pi pi-user"></i></span>{{user_data()->data['nombre']}}</span>
                        </li>
                        @role('client')
                            <li><notification-bell company="{{Auth::user()->client_id}}"></notification-bell></li>
                        @endrole
                        <li>
                            <logout-button></logout-button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        {{-- <bread-crumb-main></bread-crumb-main> --}}

        <main class="py-1">
            @yield('content')
        </main>


        </div>
    </div>
</body>
</html>
