<?php namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Dashboard\Services\Access\RoleAccess;

class Role extends Model
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