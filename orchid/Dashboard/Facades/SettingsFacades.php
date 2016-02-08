<?php namespace Orchid\Dashboard\Facades;

use Illuminate\Support\Facades\Facade;
use Orchid\Dashboard\Models\Settings;

class SettingsFacades extends Facade
{
    /**
     * Получить зарегистрированное имя компонента.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Settings::class;
    }
}
