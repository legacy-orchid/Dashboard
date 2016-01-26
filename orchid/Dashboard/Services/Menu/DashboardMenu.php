<?php namespace Orchid\Dashboard\Services\Menu;

class DashboardMenu
{

    /**
     *  Положение меню
     * @var
     */
    public $location;


    /**
     * Содержимое всех мею
     * @var
     */
    public $container;


    /**
     * DashboardMenu constructor.
     */
    public function __construct()
    {
        $this->modules = collect();
    }


    /**
     * Установка положения меню
     * @param $place
     */
    public function place($location)
    {
        $this->location = $location;
    }


    public function get($location = null)
    {
        if (!is_null($location)) {
            $this->location = $location;
        }
        $location = $this->location;
        return $this->container->first(function ($key, $value) use ($location) {
            return $location == $value;
        });

    }







    /**
     * @param string $position
     * @param array  $element
     */
    public function addItems($position, array $element)
    {
        foreach ($element as $key => $value) {
            array_add($this->$position, $key, $value);
        }
    }


    /**
     * @param string $position
     * @param string $key
     *
     * @return mixed
     */
    public function removeItems($position, $key)
    {
        return array_pull($this->$position, $key);
    }


}