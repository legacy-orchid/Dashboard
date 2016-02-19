<?php namespace Orchid\Dashboard\Services\Widget;

use Config;

class Widget implements WidgetContract
{

    /**
     * @param $key
     * @return mixed
     */
    public function get($key)
    {
        $class = config('dashboard.Widgets.' . $key);
        return $class->run();
    }

    public function run()
    {
    }
}
