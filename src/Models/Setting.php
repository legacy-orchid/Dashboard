<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;
use Nicolaslopezj\Searchable\SearchableTrait;
use Orchid\Dashboard\Services\Settings\SettingTrait;

class Setting extends Model
{
    use SettingTrait, Sortable, SearchableTrait;

    protected $table = 'settings';

    protected $sortable = ['key'];

    protected $fillable = [
        'key',
        'value',
    ];

    protected $casts = [
        'value' => 'array',
    ];
}
