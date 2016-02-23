<?php namespace Orchid\Dashboard\Services\Widget;

interface WidgetContract
{


    /**
     * @param $key
     * @return mixed
     */
    public function get($key);


    public function run();
}
