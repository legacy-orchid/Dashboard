<?php namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Dashboard\Services\Settings\SettingTrait;

class Settings extends Model
{
    use SettingTrait;

    protected $table = 'settings';

    protected $fillable = [
        'key',
        'value',
    ];

    protected $casts = [
        'value' => 'array',
    ];


}