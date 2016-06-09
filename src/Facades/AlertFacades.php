<?php

namespace Orchid\Dashboard\Facades;

use Illuminate\Support\Facades\Facade;
use Orchid\Dashboard\Services\Alert\Alert;

class AlertFacades extends Facade
{
    /**
     * Получить зарегистрированное имя компонента.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Alert::class;
    }
}
