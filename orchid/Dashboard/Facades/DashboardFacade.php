<?php

namespace Orchid\Dashboard\Facades;

use Illuminate\Support\Facades\Facade;
use Orchid\Dashboard\Services\Menu\DashboardMenu;

class DashboardFacade extends Facade
{

    protected static function getFacadeAccessor() {
        return DashboardMenu::class;
    }

}