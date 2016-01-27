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
    public function __construct($location = null, $template = null, $arg = null, $sort = null)
    {
        $this->container = collect();
        $this->location = $location;
        $this->template = $template;
        $this->arg = $arg;
        $this->sort = $sort;
    }


    /**
     * Установка положения меню
     * @param $place
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


    public function sortBy($sort)
    {
        $this->sort = $sort;
    }


    /**
     * Добавление нового элемента в контейнер
     */
    public function add()
    {
        $this->item = collect([
            'location' => $this->location,
            'template' => $this->template,
            'arg' => $this->arg,
            'sort' => $this->sort,

        ]);
        $this->container->push($this->item);
    }


    /**
     * Сгенерирование меню по вьюхам
     * @param $location
     */
    public function render($location)
    {
        $html = '';
        foreach ($this->container->where('location', $location)->sortBy('sort') as $key => $value) {
            $html .= view($value['template'],
                collect(['items' => $value['arg']])
            );
        }
        return $html;
    }


}