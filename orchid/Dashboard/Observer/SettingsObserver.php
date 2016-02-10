<?php namespace Orchid\Dashboard\Observer;

use Cache;

class SettingsObserver
{
    public function saved($model)
    {
        Cache::flush();
    }

    public function deleting($model)
    {
        Cache::flush();
    }
}