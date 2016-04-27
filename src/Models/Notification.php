<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'notification';

    protected $fillable = [
        'user_id',
        'type',
        'url',
        'text',
        'read',
    ];

    protected $casts = [
        'read' => 'boolean',
    ];
}
