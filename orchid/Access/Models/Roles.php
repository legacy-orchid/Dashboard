<?php namespace Orchid\Access\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Access\Traits\RoleAccess;

class Roles extends Model
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
