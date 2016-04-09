<?php namespace Orchid\Dashboard\Services\Log;

use Orchid\Dashboard\Services\Log\Utilities\LogItemCollection;
use Orchid\Dashboard\Services\Log\Utilities\LogParser;

class Log
{
    private $items;
    
    public function __construct(LogItemCollection $log_colletion)
    {
        $this->items = $log_colletion::make();
    }

    /**
     * Все логи.
     *
     * @return Entities\LogCollection
     */
    public function all()
    {
        return $this->items;
    }

    /**
     * Лог по дате.
     *
     * @param  string  $date
     * @return Entities\LogCollection
     */
    public function get($date)
    {
        return $this->items->get($date);
    }

    /**
     * Все логи по дате и типу лога.
     *
     * @param  string  $date
     * @param  string  $level
     * @return Entities\LogEntryCollection
     */
    public function entries($date, $level = 'all')
    {
        return $this->items->get($date)->entries($level);
    }

    /**
     * Статиска лого.
     *
     * @return array
     */
    public function stats()
    {
        return $this->items->stats();
    }

    /**
     * Список лог файлов.
     *
     * @return array
     */
    public function logs()
    {
        return $this->items->logs();
    }

    /**
     * Список лог файлов с датами.
     *
     * @return array
     */
    public function dates()
    {
        return array_keys($this->items->toArray());
    }

    /**
     * Кол-во логов.
     *
     * @return int
     */
    public function count()
    {
        return count($this->items);
    }

    /**
     * Дерево логов.
     *
     * @param  bool|false  $trans
     * @return array
     */
    public function tree($trans = false)
    {
        return $this->items->tree($trans);
    }
    
    /**
     * Determine if the log folder is empty or not.
     *
     * @return bool
     */
    public function isEmpty()
    {
        return empty($this->items);
    }

    /**
     * PSR уровни логов.
     *
     * @param  bool|false  $flip
     * @return array
     */
    public function levels($flip = false)
    {
        return LogParser::levels();
    }
}
