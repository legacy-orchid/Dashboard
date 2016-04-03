<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Dashboard\Services\Access\RoleAccess;
use Orchid\Dashboard\Services\Access\RoleInterface;
use Kyslik\ColumnSortable\Sortable;
use Nicolaslopezj\Searchable\SearchableTrait;

class Role extends Model implements RoleInterface
{
    use RoleAccess, Sortable, SearchableTrait;

    /**
     * @var
     */
    protected static $usersModel = User::class;

    /**
     * @var string
     */
    protected $table = 'roles';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'slug',
        'permissions',
    ];

    /**
     * @var array
     */
    protected $searchable = [
        'columns' => [
            'slug' => 3,
            'name' => 3,
        ],
    ];
}
