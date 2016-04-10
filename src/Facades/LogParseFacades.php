<?php

namespace Orchid\Dashboard\Facades;

use Illuminate\Support\Facades\Facade;
use Orchid\Dashboard\Services\Log\Log;

class LogParseFacades extends Facade
{
    /**
     * Получить зарегистрированное имя компонента.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Log::class;
    }

    /**
     * @param $method
     * @param $args
     * @return mixed
     */
    public function __call($method, $args)
    {
        $log = new Log();
        return $log->$method($args);
    }
}
