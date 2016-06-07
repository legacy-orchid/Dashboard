<?php

namespace Orchid\Dashboard\Services\Log;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Orchid\Dashboard\Services\Log\Utilities\LogItem;
use Orchid\Dashboard\Services\Log\Utilities\LogParser;

class Log extends Collection
{
    private $storagePath;
    private $filesystem;
    private $filesPattern = 'laravel*.log';

    public function __construct($items = [])
    {
        $this->storagePath = storage_path('logs');
        $this->filesystem = new Filesystem(app('files'), $this->storagePath);

        parent::__construct($items);

        $this->load();
    }

    private function load()
    {
        $paths = array_reverse($this->logs());

        $names = array_map(function ($file) {
            $path_info = pathinfo($file);

            return $path_info['filename'];
        }, $paths);

        $files = array_combine($names, $paths);

        foreach ($files as $name => $path) {
            $raw = $this->filesystem->get($path);
            $this->put($name, LogItem::make($name, $path, $raw));
        }
    }

    /**
     * Список лог файлов.
     */
    public function logs()
    {
        $pattern = $this->storagePath . DIRECTORY_SEPARATOR . $this->filesPattern;
        $glob = glob($pattern, GLOB_BRACE);
        $files = array_map('realpath', $glob);

        return array_filter($files);
    }

    /**
     * Все логи.
     */
    public function all()
    {
        return $this->items;
    }

    /**
     * Все логи по имени файла и типу логов.
     */
    public function entries($filename, $level = 'all')
    {
        return $this->get($filename)->entries($level);
    }

    /**
     * Логи по имени файла.
     */
    public function get($filename, $default = null)
    {
        return parent::get($filename, $default);
    }

    /**
     * Статистика логов.
     */
    public function stats()
    {
        $stats = [];

        foreach ($this->items as $filename => $log) {
            /* @var LogItem $log */
            $stats[$filename] = $log->stats();
        }

        return $stats;
    }

    /**
     * Кол-во лог файлов.
     */
    public function count()
    {
        return count($this->items);
    }

    /**
     * Дерево логов.
     */
    public function tree($trans = false)
    {
        $tree = [];

        foreach ($this->items as $date => $log) {
            /* @var Log $log */
            $tree[$date] = $log->tree($trans);
        }

        return $tree;
    }

    /**
     * Проверка на существование логов.
     */
    public function isEmpty()
    {
        return empty($this->items);
    }

    /**
     * PSR уровни логов.
     */
    public function levels($flip = false)
    {
        return LogParser::levels($flip);
    }

    /*
     * Создание коллекции логов
     */

    /**
     * Удаление файла с логами по имени.
     */
    public function delete($filename)
    {
        $path_info = pathinfo($this->filesPattern);

        return $this->filesystem->delete($this->storagePath.DIRECTORY_SEPARATOR.$filename.'.'.$path_info['extension']);
    }
}
