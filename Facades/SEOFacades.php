<?php

namespace Orchid\Dashboard\Facades;

use Illuminate\Support\Facades\Facade;
use Orchid\Dashboard\Models\SEO;

class SEOFacades extends Facade
{
    /**
     * Получить зарегистрированное имя компонента.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return SEO::class;
    }
}
