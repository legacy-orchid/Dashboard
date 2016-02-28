<?php

namespace Orchid\Dashboard\Facades;

use Orchid\Dashboard\Models\SEO;
use Illuminate\Support\Facades\Facade;

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
