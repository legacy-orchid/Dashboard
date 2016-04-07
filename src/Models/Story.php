<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    protected $table = 'story';

    protected $fillable = [
        'name',
        'content',
        'image',
        'posts_id',
    ];
}
