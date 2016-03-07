<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Dashboard\Services\Access\RoleAccess;
use Orchid\Dashboard\Services\Access\RoleInterface;

class Role extends Model implements RoleInterface
{
    use RoleAccess;

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
}
