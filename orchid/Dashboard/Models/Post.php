<?php namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $table = 'posts';

    protected $fillable = [
        'types_id',
        'users_id',
        'domains_id',
    ];


}