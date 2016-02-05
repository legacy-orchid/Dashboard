@yield('content')


        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>App Name - @yield('title')</title>

    <link rel="stylesheet" href="{{ elixir("css/app.css") }}">

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
                            <span>Навигация</span>
                        </li>
                        {!! Dashboard::Menu()->render('leftMenu') !!}

                        <li>
                            <a href="ui_chart.html">
                                <i class="fa fa-tachometer"></i>
                                <span>Панель</span>
                            </a>
                        </li>


                        <li class="dropdown">
                            <a class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="true">
                                                 <span class="pull-right text-muted">
                    <i class="fa fa-fw fa-angle-right text"></i>
                  </span>
                                <i class="fa fa-pencil-square-o"></i>
                                <span>Записи</span>
                            </a>
                            <ul class="dropdown-menu dropdown-full dropdown-lvl" aria-labelledby="dropdownMenu1">
                                <li class="dropdown-header">Интерфейс и данные</li>


                                <li><a href="#">
                                        <i class="fa fa-bars"></i>
                                        Меню</a></li>


                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-pencil"></i>
                                        Общие записи
                                        <i class="fa fa-fw fa-angle-right pull-right text"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                        <li class="dropdown-header">Типы</li>
                                        <li><a href="#"><i class="fa fa-file-text-o"></i> Страницы</a></li>
                                        <li><a href="#"><i class="fa fa-newspaper-o"></i> Новости</a></li>
                                        <li><a href="#"><i class="fa fa-bullhorn"></i> Акции</a></li>
                                        <li><a href="#"><i class="fa fa-cube"></i> Товары</a></li>
                                        <li class="divider"></li>
                                    </ul>
                                </li>


                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-cubes"></i>
                                        Общие блоки
                                        <i class="fa fa-fw fa-angle-right pull-right text"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                        <li class="dropdown-header">Типы</li>
                                        <li><a href="#">Dropdown Link 1</a></li>
                                        <li><a href="#">Dropdown Link 2</a></li>
                                        <li><a href="#">Dropdown Link 3</a></li>
                                        <li class="divider"></li>
                                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle"
                                                                                 data-toggle="dropdown">Dropdown Link
                                                4</a>
                                            <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                                <li><a href="#">Dropdown Submenu Link 4.1</a></li>
                                                <li><a href="#">Dropdown Submenu Link 4.2</a></li>
                                                <li><a href="#">Dropdown Submenu Link 4.3</a></li>
                                                <li><a href="#">Dropdown Submenu Link 4.4</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle"
                                                                                 data-toggle="dropdown">Dropdown Link
                                                5</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Dropdown Submenu Link 5.1</a></li>
                                                <li><a href="#">Dropdown Submenu Link 5.2</a></li>
                                                <li><a href="#">Dropdown Submenu Link 5.3</a></li>
                                                <li class="divider"></li>
                                                <li class="dropdown dropdown-submenu"><a href="#"
                                                                                         class="dropdown-toggle"
                                                                                         data-toggle="dropdown">Dropdown
                                                        Submenu Link 5.4</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">Dropdown Submenu Link 5.4.1</a></li>
                                                        <li><a href="#">Dropdown Submenu Link 5.4.2</a></li>
                                                        <li class="divider"></li>
                                                        <li class="dropdown dropdown-submenu"><a href="#"
                                                                                                 class="dropdown-toggle"
                                                                                                 data-toggle="dropdown">Dropdown
                                                                Submenu Link 5.4.3</a>
                                                            <ul class="dropdown-menu">
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.1</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.2</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.3</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown dropdown-submenu"><a href="#"
                                                                                                 class="dropdown-toggle"
                                                                                                 data-toggle="dropdown">Dropdown
                                                                Submenu Link 5.4.4</a>
                                                            <ul class="dropdown-menu">
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.1</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.2</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.3</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.4</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="divider"></li>
                                <li class="dropdown-header">Поисковая оптимизация</li>
                                <li><a href="#"><i class="fa fa-clone"></i> Статические страницы</a></li>
                                <li><a href="#"><i class="fa fa-sitemap"></i> Карта сайта</a></li>


                                <li class="divider"></li>
                                <li class="dropdown-header">Медиафайлы</li>
                                <li><a href="#"><i class="fa fa-folder"></i>Библиотека</a></li>


                            </ul>
                        </li>


                        <li class="dropdown">
                            <a class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="true">
                                                 <span class="pull-right text-muted">
                    <i class="fa fa-fw fa-angle-right text"></i>
                    <i class="fa fa-fw fa-angle-down text-active"></i>
                  </span>
                                <i class="fa fa-wrench"></i>
                                <span>Инструменты</span>
                            </a>
                            <ul class="dropdown-menu dropdown-full dropdown-lvl" aria-labelledby="dropdownMenu1">
                                <li class="dropdown-header">Управление записями</li>
                                <li><a href="#"><i class="fa fa-wrench"></i> Типы записей</a></li>
                                <li><a href="#"><i class="fa fa-suitcase"></i> Категории</a></li>
                                <li><a href="#"><i class="fa fa-tags"></i>Теги</a></li>


                                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-users"></i>
                                        Пользователи
                                        <i class="fa fa-fw fa-angle-right pull-right text"></i></a>
                                    <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                        <li class="dropdown-header">Пользователи</li>
                                        <li><a href="#"><i class="fa fa-user"></i> Учасники</a></li>
                                        <li><a href="#"><i class="fa fa-lock"></i> Роли</a></li>
                                        <li class="divider"></li>
                                    </ul>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-header">База данных</li>
                                <li><a href="#"><i class="fa fa-database"></i> Управление</a></li>
                                <li><a href="#"><i class="fa fa-cloud-upload"></i> Импорт</a></li>
                                <li><a href="#"><i class="fa fa-cloud-download"></i> Экспорт</a></li>
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-header">Статистика</li>


                                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-area-chart"></i> Продажи
                                        <i class="fa fa-fw fa-angle-right pull-right text"></i></a>
                                    <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                        <li class="dropdown-header">Статистика</li>
                                        <li><a href="#"><i class="fa fa-credit-card"></i> Заказы</a></li>
                                        <li><a href="#"><i class="fa fa-percent"></i> Налоги</a></li>
                                        <li><a href="#"><i class="fa fa-truck"></i> Доставка</a></li>
                                        <li><a href="#"><i class="fa fa-recycle"></i> Возвраты</a></li>
                                        <li><a href="#"><i class="fa fa-ticket"></i> Купоны</a></li>
                                        <li class="divider"></li>
                                    </ul>
                                </li>


                                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-cube"></i> Товары
                                        <i class="fa fa-fw fa-angle-right pull-right text"></i></a>
                                    <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                        <li class="dropdown-header">Статистика</li>
                                        <li><a href="#">Просмотренно</a></li>
                                        <li><a href="#">Куплено</a></li>
                                        <li class="divider"></li>
                                    </ul>
                                </li>


                                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-group"></i> Клиенты
                                        <i class="fa fa-fw fa-angle-right pull-right text"></i></a>
                                    <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                        <li class="dropdown-header">Статистика</li>
                                        <li><a href="#">Клиенты на сайте</a></li>
                                        <li><a href="#">Активность клиентов</a></li>
                                        <li><a href="#">Заказы</a></li>
                                        <li><a href="#">Бонусы</a></li>
                                        <li><a href="#">Кредиты</a></li>
                                        <li class="divider"></li>
                                    </ul>
                                </li>


                            </ul>
                        </li>


                        <li class="dropdown">
                            <a class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="true">
                                                 <span class="pull-right text-muted">
                    <i class="fa fa-fw fa-angle-right text"></i>
                    <i class="fa fa-fw fa-angle-down text-active"></i>
                  </span>
                                <i class="fa fa-cogs icon"></i>
                                <span>Система</span>
                            </a>
                            <ul class="dropdown-menu dropdown-full dropdown-lvl" aria-labelledby="dropdownMenu1">
                                <li class="dropdown-header">Настройки</li>
                                <li><a href="#"><i class="fa fa-globe"></i> Веб домены</a></li>
                                <li><a href="#"><i class="fa fa-book"></i> Константы</a></li>
                                <li><a href="#"><i class="fa fa-language"></i> Локализация</a></li>
                                <li role="separator" class="divider"></li>

                                <li class="dropdown-header">Ошибки</li>
                                <li><a href="#"><i class="fa fa-list-alt"></i> Журнал</a></li>
                                <li><a href="#"><i class="fa fa-hand-paper-o"></i> Тестирование</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>


                                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown
                                        <b class="caret"></b></a>
                                    <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                        <li><a href="#">Dropdown Link 1</a></li>
                                        <li><a href="#">Dropdown Link 2</a></li>
                                        <li><a href="#">Dropdown Link 3</a></li>
                                        <li class="divider"></li>
                                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle"
                                                                                 data-toggle="dropdown">Dropdown Link
                                                4</a>
                                            <ul class="dropdown-menu dropdown-full dropdown-lvl">
                                                <li><a href="#">Dropdown Submenu Link 4.1</a></li>
                                                <li><a href="#">Dropdown Submenu Link 4.2</a></li>
                                                <li><a href="#">Dropdown Submenu Link 4.3</a></li>
                                                <li><a href="#">Dropdown Submenu Link 4.4</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle"
                                                                                 data-toggle="dropdown">Dropdown Link
                                                5</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Dropdown Submenu Link 5.1</a></li>
                                                <li><a href="#">Dropdown Submenu Link 5.2</a></li>
                                                <li><a href="#">Dropdown Submenu Link 5.3</a></li>
                                                <li class="divider"></li>
                                                <li class="dropdown dropdown-submenu"><a href="#"
                                                                                         class="dropdown-toggle"
                                                                                         data-toggle="dropdown">Dropdown
                                                        Submenu Link 5.4</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">Dropdown Submenu Link 5.4.1</a></li>
                                                        <li><a href="#">Dropdown Submenu Link 5.4.2</a></li>
                                                        <li class="divider"></li>
                                                        <li class="dropdown dropdown-submenu"><a href="#"
                                                                                                 class="dropdown-toggle"
                                                                                                 data-toggle="dropdown">Dropdown
                                                                Submenu Link 5.4.3</a>
                                                            <ul class="dropdown-menu">
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.1</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.2</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.3</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.3.4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="dropdown dropdown-submenu"><a href="#"
                                                                                                 class="dropdown-toggle"
                                                                                                 data-toggle="dropdown">Dropdown
                                                                Submenu Link 5.4.4</a>
                                                            <ul class="dropdown-menu">
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.1</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.2</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.3</a></li>
                                                                <li><a href="#">Dropdown Submenu Link 5.4.4.4</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </li>


                        <li class="line dk"></li>

                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>Компоненты</span>
                        </li>


                        <li>
                            <a href="mail.html">
                                <b class="badge bg-info pull-right">9</b>
                                <i class="fa fa-send text-info-lter"></i>
                                <span class="font-bold">Email</span>
                            </a>
                        </li>


                        <li>
                            <a href="mail.html">
                                <b class="badge bg-info pull-right">9</b>
                                <i class="fa fa-send text-info-lter"></i>
                                <span class="font-bold">Email</span>
                            </a>
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
        <div class="app-content-body ">
            <loading-bar
                    class="someClass"
                    id="someId"
                    progress="10%"
                    direction="left"
                    error="true">
            </loading-bar>


            @yield('content')

            <div id="app">
                <h1>Hello App!</h1>
                <p>
                    <!-- use v-link directive for navigation. -->
                    <a v-link="{ path: '/foo', activeClass: 'active' }">Go to Foo</a>
                    <a v-link="{ path: '/bar', activeClass: 'active' }">Go to Bar</a>
                </p>
                <!-- route outlet -->
                <router-view></router-view>
            </div>

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


<script src="{{elixir('js/app.js')}}" type="text/javascript"></script>

<script>
    (function ($) {
        $(document).ready(function () {
            $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass('open');
                $(this).parent().toggleClass('open');
            });
        });
    })(jQuery);
</script>


@stack('scripts')

</body>
</html>