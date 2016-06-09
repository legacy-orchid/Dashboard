<?php

namespace Orchid\Dashboard\Services\Log\Utilities;

use Psr\Log\LogLevel;
use ReflectionClass;

class LogParser
{
    /* ------------------------------------------------------------------------------------------------
     |  Properties
     | ------------------------------------------------------------------------------------------------
     */
    /**
     * Parsed data.
     *
     * @var array
     */
    protected static $parsed = [];
    protected static $levels = [];

    /* ------------------------------------------------------------------------------------------------
     |  Main Functions
     | ------------------------------------------------------------------------------------------------
     */
    /**
     * Parse file content.
     *
     * @param string $raw
     *
     * @return array
     */
    public static function parse($raw)
    {
        self::$parsed = [];
        list($headings, $data) = self::parseRawData($raw);

        // @codeCoverageIgnoreStart
        if (!is_array($headings)) {
            return self::$parsed;
        }
        // @codeCoverageIgnoreEnd

        foreach ($headings as $heading) {
            for ($i = 0, $j = count($heading); $i < $j; ++$i) {
                self::populateEntries($heading, $data, $i);
            }
        };

        unset($headings, $data);

        return array_reverse(self::$parsed);
    }

    /**
     * Parse raw data.
     *
     * @param string $raw
     *
     * @return array
     */
    private static function parseRawData($raw)
    {
        $pattern = '/\[\d{4}(-\d{2}){2} \d{2}(:\d{2}){2}\].*/';
        preg_match_all($pattern, $raw, $headings);
        $data = preg_split($pattern, $raw);

        if ($data[0] < 1) {
            $trash = array_shift($data);
            unset($trash);
        }

        return [$headings, $data];
    }

    /* ------------------------------------------------------------------------------------------------
     |  Other Functions
     | ------------------------------------------------------------------------------------------------
     */

    /**
     * Populate entries.
     *
     * @param array $heading
     * @param array $data
     * @param int   $key
     */
    private static function populateEntries($heading, $data, $key)
    {
        foreach (self::levels() as $level) {
            if (self::hasLogLevel($heading[$key], $level)) {
                self::$parsed[] = [
                    'level' => $level,
                    'header' => $heading[$key],
                    'stack' => $data[$key],
                ];
            }
        }
    }

    /**
     * PSR уровни логов.
     *
     * @param bool|false $flip
     *
     * @return array
     */
    public static function levels($flip = false)
    {
        if (empty(self::$levels)) {
            $class = new ReflectionClass(new LogLevel());
            self::$levels = $class->getConstants();
        }

        return $flip ? array_flip(self::$levels) : self::$levels;
    }

    /**
     * Check if header has a log level.
     *
     * @param string $heading
     * @param string $level
     *
     * @return bool
     */
    private static function hasLogLevel($heading, $level)
    {
        return str_contains(strtolower($heading), strtolower('.'.$level));
    }
}
