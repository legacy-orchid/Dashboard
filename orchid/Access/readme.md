## Access
Role based access control package from Laravel

[![Latest Stable Version](https://poser.pugx.org/orchid/access/v/stable)](https://packagist.org/packages/orchid/access)
[![Total Downloads](https://poser.pugx.org/orchid/access/downloads)](https://packagist.org/packages/orchid/access)
[![License](https://poser.pugx.org/orchid/access/license)](https://packagist.org/packages/orchid/access)



## Installation

1. install package

	```php
    composer require orchid/access
	```

1. edit config/app.php

	service provider :

	```php
	 Orchid\Access\Providers\SettingsServiceProvider::class
	```

1. create user\roles table

	```php
	php artisan vendor:publish
	php artisan migrate
	```

## Usage

```php

/**
* User
*/


use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\Model;
use Orchid\Access\Traits\UserAccess;


class User extends Model implements AuthenticatableContract, CanResetPasswordContract
{

    use Authenticatable, CanResetPassword, UserAccess;

    /**
     * @var
     */
    protected static $rolesModel = Roles::class;


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
        'email',
        'permissions',
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


}








// It checks the availability of a user in the roles and permissions
Auth:user()->hasAccess('param');

// Get access for the user
Auth:user()->getPermissionsAttribute($permissions);

// Set access for the user
Auth:user()->setPermissionsAttribute($permissions)

// Get roles for the user
Auth:user()->getRoles();

// Check user has role
Auth:user()->inRole($role)

// Add Role for user
Auth:user()->addRole($role)

```



```php

/**
* Middleware
*/

// To check on each controller add middleware in /Http/Kernel.php
        'Access'     => \Orchid\Access\Middleware\AccessMiddleware::class,
```




```php

/**
* Role
*/

// Model Role

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






$role = Role::getRoleSlug('string');

// Will return all users with that role
$role->getUsers();

// Get access for the role
$role->getPermissionsAttribute($permissions);

// Set access for the role
$role->setPermissionsAttribute($permissions);




```


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

