<?php namespace Orchid\Dashboard\Services\Log\Utilities;

use Orchid\Dashboard\Services\Log\Utilities\LogItem;
use Orchid\Dashboard\Services\Log\Log;
use Illuminate\Support\Collection;
use Illuminate\Filesystem\Filesystem;

class LogItemCollection extends Collection
{
    /* ------------------------------------------------------------------------------------------------
     |  Properties
     | ------------------------------------------------------------------------------------------------
     */
    /**
     * @var FilesystemInterface
     */
    private $filesystem;
    private $storagePath;
    private $patternFileLog = 'laravel-[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9].log';

    /* ------------------------------------------------------------------------------------------------
     |  Constructor
     | ------------------------------------------------------------------------------------------------
     */
    /**
     * Constructor
     *
     * @param  array  $items
     */
    public function __construct($items = [])
    {
        $this->storagePath = storage_path('logs');
        
        $this->setFilesystem(new Filesystem(app('files'), $this->storagePath));

        parent::__construct($items);

        if (empty($items)) {
            $this->load();
        }
    }

    /* ------------------------------------------------------------------------------------------------
     |  Getters & Setters
     | ------------------------------------------------------------------------------------------------
     */
    /**
     * Set the filesystem instance.
     *
     * @param  FilesystemInterface  $filesystem
     *
     * @return self
     */
    public function setFilesystem(Filesystem $filesystem)
    {
        $this->filesystem = $filesystem;

        return $this;
    }

    /* ------------------------------------------------------------------------------------------------
     |  Main functions
     | ------------------------------------------------------------------------------------------------
     */
    /**
     * Load all logs.
     *
     * @return self
     */
    private function load()
    {
        foreach($this->datesLog(true) as $date => $path) {
            $raw = $this->read($date);
            $this->put($date, LogItem::make($date, $path, $raw));
        }

        return $this;
    }

    /**
     * Get a log.
     *
     * @param  string     $date
     * @param  mixed|null $default
     *
     * @return Log
     *
     * @throws LogNotFound
     */
    public function get($date, $default = null)
    {
        return parent::get($date, $default);
    }

    /**
     * Get a log. (alias)
     * @see LogCollection::get()
     *
     * @param  string  $date
     *
     * @return Log
     *
     * @throws LogNotFound
     */
    public function log($date)
    {
        return $this->get($date);
    }


    /**
     * Get log entries.
     *
     * @param  string  $date
     * @param  string  $level
     *
     * @return LogEntryCollection|null
     */
    public function entries($date, $level = 'all')
    {
        return $this->get($date)->entries($level);
    }

    /**
     * Get logs statistics
     *
     * @return array
     */
    public function stats()
    {
        $stats = [];

        foreach ($this->items as $date => $log) {
            /** @var Log $log */
            $stats[$date] = $log->stats();
        }

        return $stats;
    }

    /**
     * List the log files (dates).
     *
     * @return array
     */
    public function dates()
    {
        return $this->keys()->toArray();
    }

    /**
     * Get entries total.
     *
     * @param  string  $level
     *
     * @return int
     */
    public function total($level = 'all')
    {
        return (int) $this->sum(function (Log $log) use ($level) {
            return $log->entries($level)->count();
        });
    }

    /**
     * Get logs tree.
     *
     * @param  bool|false  $trans
     *
     * @return array
     */
    public function tree($trans = false)
    {
        $tree = [];

        foreach ($this->items as $date => $log) {
            /** @var Log $log */
            $tree[$date] = $log->tree($trans);
        }

        return $tree;
    }

    /**
     * Get logs menu.
     *
     * @param  bool|true  $trans
     *
     * @return array
     */
    public function menu($trans = true)
    {
        $menu = [];

        foreach ($this->items as $date => $log) {
            $menu[$date] = $log->menu($trans);
        }

        return $menu;
    }

    /**
     * Read the log.
     *
     * @param  string  $date
     * @return string
     */
    private function read($date)
    {
        $path = $this->getLogPath($date);
        return $this->filesystem->get($path);
    }

    /**
     * Get the log file path.
     *
     * @param  string  $date
     * @return string
     */
    private function getLogPath($date = '')
    {
        if (preg_match('/\d{4}(-\d{2}){2}/', $date)) {
            $path = $this->storagePath . '/laravel-' . $date . '.log';
        }
        else {
            $path = $this->storagePath . '/' . $date;
        }

        return realpath($path);
    }

    /**
     * Список лог файлов.
     *
     * @return array
     */
    public function logs()
    {
        $pattern = $this->storagePath . '\\' . $this->patternFileLog;
        $glob = glob($pattern, GLOB_BRACE);
        $files = array_map('realpath', $glob);

        return array_filter($files);
    }

    /**
     * Delete the log.
     *
     * @param  string  $date
     * @return bool
     */
    private function deleteLog($date)
    {
        return $this->filesystem->delete($path);
    }

    /**
     * Delete the log.
     *
     * @param  string  $date
     * @return bool
     */
    public function delete($date)
    {
        return $this->deleteLog($date);
    }

    /**
     * List the log files (Only dates).
     *
     * @param  bool|false  $withPaths
     * @return array
     */
    public function datesLog($withPaths = false)
    {
        $files = array_reverse($this->logs());
        $dates = $this->extractDates($files);

        if ($withPaths) {
            $dates = array_combine($dates, $files);
        }

        return $dates;
    }

    /**
     * Extract dates from files.
     *
     * @param  array  $files
     * @return array
     */
    private function extractDates(array $files)
    {
        return array_map(function ($file) {
            return preg_replace('/.*(\d{4}(-\d{2}){2}).*/', '$1', basename($file));
        }, $files);
    }
}
