<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" id="csrf-token">
    <title>App Name - @yield('title')</title>

    <link rel="stylesheet" href="/orchid/css/orchid.css">

    @stack('stylesheet')

</head>


<body>
<div class="app app-header-fixed app-aside-fixed">


    <!-- header -->
    <header id="header" class="app-header navbar" role="menu">
        <!-- navbar header -->
        <div class="navbar-header bg-dark">
            <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">
                <i class="glyphicon glyphicon-cog"></i>
            </button>
            <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">
                <i class="glyphicon glyphicon-align-justify"></i>
            </button>
            <!-- brand -->
            <a href="/" class="navbar-brand text-lt">
                <i class="fa fa fa-bolt"></i>
                <img src="/orchid/img/orchid.svg">
                <span class="hidden-folded m-l-xs">Orchid</span>
            </a>
            <!-- / brand -->
        </div>
        <!-- / navbar header -->

        <!-- navbar collapse -->
        @include('dashboard::partials.navbar')
        <!-- / navbar collapse -->
    </header>
    <!-- / header -->


    <!-- aside -->
    <aside id="aside" class="app-aside hidden-xs bg-dark">
        <div class="aside-wrap">
            <div class="navi-wrap">
                <!-- user -->
                <div class="clearfix hidden-xs text-center hide" id="aside-user">
                    <div class="dropdown wrapper">
                        <a href="app.page.profile">
                <span class="thumb-lg w-auto-folded avatar m-t-sm">
                  <img src="img/a0.jpg" class="img-full" alt="...">
                </span>
                        </a>
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle hidden-folded">
                <span class="clear">
                  <span class="block m-t-sm">
                    <strong class="font-bold text-lt">John.Smith</strong>
                    <b class="caret"></b>
                  </span>
                  <span class="text-muted text-xs block">Art Director</span>
                </span>
                        </a>
                        <!-- dropdown -->
                        <ul class="dropdown-menu animated fadeInRight w hidden-folded">
                            <li class="wrapper b-b m-b-sm bg-info m-t-n-xs">
                                <span class="arrow top hidden-folded arrow-info"></span>

                                <div>
                                    <p>300mb of 500mb used</p>
                                </div>
                                <div class="progress progress-xs m-b-none dker">
                                    <div class="progress-bar bg-white" data-toggle="tooltip" data-original-title="50%"
                                         style="width: 50%"></div>
                                </div>
                            </li>
                            <li>
                                <a href="">Settings</a>
                            </li>
                            <li>
                                <a href="page_profile.html">Profile</a>
                            </li>
                            <li>
                                <a href="">
                                    <span class="badge bg-danger pull-right">3</span>
                                    Notifications
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="page_signin.html">Logout</a>
                            </li>
                        </ul>
                        <!-- / dropdown -->
                    </div>
                    <div class="line dk hidden-folded"></div>
                </div>
                <!-- / user -->

                <!-- nav -->
                <nav ui-nav="" class="navi clearfix">
                    <ul class="nav">
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>{{trans('dashboard::menu.Navigation')}}</span>
                        </li>
                        {!! Orchid::Menu()->render('leftMenu') !!}

                        <li class="line dk"></li>

                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>{{trans('dashboard::menu.Components')}}</span>
                        </li>


                        <li>
                            <a href="mail.html">
                                <b class="badge bg-info pull-right">9</b>
                                <i class="fa fa-send text-info-lter"></i>
                                <span class="font-bold">Email</span>
                            </a>
                        </li>


                        <li class="line dk hidden-folded"></li>

                    </ul>
                </nav>
                <!-- nav -->

                <!-- aside footer -->
                <div class="wrapper m-t">

                    <div class="text-center-folded">
                        <span class="pull-right pull-none-folded">60%</span>
                        <span class="hidden-folded">Закрытых заказов</span>
                    </div>
                    <div class="progress progress-xxs m-t-sm dk">
                        <div class="progress-bar progress-bar-info" style="width: 60%;">
                        </div>
                    </div>
                    <div class="text-center-folded">
                        <span class="pull-right pull-none-folded">35%</span>
                        <span class="hidden-folded">Заказов в процессе</span>
                    </div>
                    <div class="progress progress-xxs m-t-sm dk">
                        <div class="progress-bar progress-bar-primary" style="width: 35%;">
                        </div>
                    </div>
                </div>
                <!-- / aside footer -->
            </div>
        </div>
    </aside>
    <!-- / aside -->


    <!-- content -->
    <div id="content" class="app-content" role="main">
        <div class="app-content-body" id="app-content-body">


            @yield('content')


        </div>
    </div>
    <!-- /content -->

    <!-- footer -->
    <footer id="footer" class="app-footer" role="footer">
        <div class="wrapper b-t bg-light">
            <span class="pull-right">2.2.0
                <a href="" class="m-l-sm text-muted"> <i class="fa fa-github"></i></a>
                <a href="" class="m-l-sm text-muted"> <i class="fa fa-long-arrow-up"></i></a>
            </span>
            © 2016 Copyright.
        </div>
    </footer>
    <!-- / footer -->


</div>


<script src="/orchid/js/orchid.js" type="text/javascript"></script>


@stack('scripts')

</body>
</html>
