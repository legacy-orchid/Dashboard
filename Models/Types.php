<?php namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;
use Nicolaslopezj\Searchable\SearchableTrait;

class Types extends Model
{
    use Sortable, SearchableTrait;

    protected $table = 'types';

    protected $fillable = [
        'name',
        'slug',
    ];




}
