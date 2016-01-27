<?php namespace Orchid\Dashboard\Facades;

use App;
use Config;
use Illuminate\Support\Facades\Facade;

class DashboardFacade extends Facade
{


    public static function __callStatic($method, $args)
    {
        $Facades = Config::get('dashboard.Facades');
        foreach ($Facades as $key => $value) {
            if ($key == $method) {
                return static::resolveFacadeInstance($value);
            }
        }

    }


}