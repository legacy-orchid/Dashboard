<?php namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;

class Domain extends Model
{
    use SearchableTrait;


    protected $table = 'domains';


    /**
     * Searchable rules.
     *
     * @var array
     */
    protected $searchable = [
        'columns' => [
            'url' => 3,
            'prefix' => 1,
        ],
    ];


    protected $fillable = [
        'url',
        'prefix',
    ];


}