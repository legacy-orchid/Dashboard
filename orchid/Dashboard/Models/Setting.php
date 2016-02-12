<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Dashboard\Services\Settings\SettingTrait;
use Kyslik\ColumnSortable\Sortable;

class Setting extends Model
{
    use SettingTrait, Sortable;

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
