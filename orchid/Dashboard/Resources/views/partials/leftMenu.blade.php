
<nav ui-nav="" class="navi clearfix">
    <ul class="nav">
        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
            <span>Навигация</span>
        </li>



        @foreach($items as $key => $value)


            <li>
                <a href="{{$value['url']}}">
                    <i class="fa fa-tachometer"></i>
                    <span>{{$value['name']}}</span>
                </a>
            </li>


        @endforeach




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
            <ul class="dropdown-menu dropdown-full dropdown-lvl-1" aria-labelledby="dropdownMenu1">
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
                    <ul class="dropdown-menu dropdown-full dropdown-lvl-2">
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
                    <ul class="dropdown-menu dropdown-full dropdown-lvl-2">
                        <li class="dropdown-header">Типы</li>
                        <li><a href="#">Dropdown Link 1</a></li>
                        <li><a href="#">Dropdown Link 2</a></li>
                        <li><a href="#">Dropdown Link 3</a></li>
                        <li class="divider"></li>
                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle"
                                                                 data-toggle="dropdown">Dropdown Link
                                4</a>
                            <ul class="dropdown-menu dropdown-full dropdown-lvl-3">
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
            <ul class="dropdown-menu dropdown-full dropdown-lvl-1" aria-labelledby="dropdownMenu1">
                <li class="dropdown-header">Управление записями</li>
                <li><a href="#"><i class="fa fa-wrench"></i> Типы записей</a></li>
                <li><a href="#"><i class="fa fa-suitcase"></i> Категории</a></li>
                <li><a href="#"><i class="fa fa-tags"></i>Теги</a></li>


                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-users"></i>
                        Пользователи
                        <i class="fa fa-fw fa-angle-right pull-right text"></i></a>
                    <ul class="dropdown-menu dropdown-full dropdown-lvl-2">
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
                    <ul class="dropdown-menu dropdown-full dropdown-lvl-2">
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
                    <ul class="dropdown-menu dropdown-full dropdown-lvl-2">
                        <li class="dropdown-header">Статистика</li>
                        <li><a href="#">Просмотренно</a></li>
                        <li><a href="#">Куплено</a></li>
                        <li class="divider"></li>
                    </ul>
                </li>


                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-group"></i> Клиенты
                        <i class="fa fa-fw fa-angle-right pull-right text"></i></a>
                    <ul class="dropdown-menu dropdown-full dropdown-lvl-2">
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
            <ul class="dropdown-menu dropdown-full dropdown-lvl-1" aria-labelledby="dropdownMenu1">
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
                    <ul class="dropdown-menu dropdown-full dropdown-lvl-2">
                        <li><a href="#">Dropdown Link 1</a></li>
                        <li><a href="#">Dropdown Link 2</a></li>
                        <li><a href="#">Dropdown Link 3</a></li>
                        <li class="divider"></li>
                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle"
                                                                 data-toggle="dropdown">Dropdown Link
                                4</a>
                            <ul class="dropdown-menu dropdown-full dropdown-lvl-3">
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