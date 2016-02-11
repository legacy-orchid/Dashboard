<?php

namespace Orchid\Dashboard\Observer;

use Cache;

class SettingObserver
{
    public function saved($model)
    {
        Cache::flush();
        return $model;
    }

    public function deleting($model)
    {
        Cache::flush();
        return $model;
    }
}
