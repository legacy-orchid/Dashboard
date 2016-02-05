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
     * Views отображения
     * @var
     */
    public $template;


    /**
     * Аргументы формирования меню
     * для передачи во Views
     * @var
     */
    public $arg;


    /**
     * Сортировка элемента меню
     * @var
     */
    public $sort;


    /**
     * Обобщающий элемент
     * @var
     */
    protected $item;


    /**
     * DashboardMenu constructor.
     */
    public function __construct()
    {
        $this->container = collect();
    }


    /**
     * Установка положения меню
     * @param $location
     */
    public function place($location)
    {
        $this->location = $location;
    }


    /**
     * @param $template
     */
    public function template($template)
    {
        $this->template = $template;
    }

    /**
     * Передача аргументов
     * @param $arg
     */
    public function with($arg)
    {
        $this->arg = $arg;
    }

    /**
     * @param $sort
     */
    public function sortBy($sort)
    {
        $this->sort = $sort;
    }


    /**
     * Добавление нового элемента в контейнер
     * @param null $place
     * @param null $template
     * @param null $arg
     * @param int $sort
     */
    public function add($place = null, $template = null, $arg = null, $sort = 500)
    {
        $this->location = $place;
        $this->template = $template;
        $this->arg = $arg;
        $this->sort = $sort;

        $this->item = [
            'location' => $this->location,
            'template' => $this->template,
            'arg' => $this->arg,
            'sort' => $this->sort,
        ];

        $this->container->push($this->item);

    }



    /**
     * Сгенерирование меню по вьюхам
     * @param $location
     * @return string
     */
    public function render($location)
    {
        //dd($this->container);
        $html = '';
        foreach ($this->container->where('location', $location)->sortBy('sort') as $key => $value) {
            $html .= view($value['template'],
                collect($value['arg'])
            );
        }
        return $html;
    }


}