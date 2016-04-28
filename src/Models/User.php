<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;
use Nicolaslopezj\Searchable\SearchableTrait;
use Orchid\Dashboard\Services\Access\UserAccess;
use Orchid\Dashboard\Services\Access\UserInterface;
use Orchid\Dashboard\Services\Notification\NotificationTrait;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract, UserInterface
{
    use Authenticatable, CanResetPassword, UserAccess, SearchableTrait, Sortable, NotificationTrait;

    /**
     * @var
     */
    protected static $rolesModel = Role::class;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'permissions',
    ];

    /**
     * @var array
     */
    protected $searchable = [
        'columns' => [
            'name' => 3,
            'email' => 1,
        ],
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'permissions' => 'array',
    ];
}
