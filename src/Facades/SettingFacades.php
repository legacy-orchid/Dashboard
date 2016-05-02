<?php

namespace Orchid\Dashboard\Facades;

use Illuminate\Support\Facades\Facade;
use Orchid\Dashboard\Models\Setting;

class SettingFacades extends Facade
{
    /**
     * Получить зарегистрированное имя компонента.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Setting::class;
    }
}
