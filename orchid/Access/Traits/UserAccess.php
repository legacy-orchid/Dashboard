<?php namespace Orchid\Access\Traits;

trait UserAccess
{

    /**
     * Returns the roles model.
     *
     * @return string
     */
    public static function getRolesModel()
    {
        return static::$rolesModel;
    }

    /**
     * Sets the roles model.
     *
     * @param  string $rolesModel
     *
     * @return void
     */
    public static function setRolesModel($rolesModel)
    {
        static::$rolesModel = $rolesModel;
    }

    /**
     * Get mutator for the "permissions" attribute.
     *
     * @param  mixed $permissions
     *
     * @return array
     */
    public function getPermissionsAttribute($permissions)
    {
        return $permissions ? json_decode($permissions, true) : [];
    }

    /**
     * Set mutator for the "permissions" attribute.
     *
     * @param  mixed $permissions
     *
     * @return void
     */
    public function setPermissionsAttribute(array $permissions)
    {
        $this->attributes['permissions'] = $permissions ? json_encode($permissions) : '';
    }

    /**
     * @return mixed
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * @param $role
     *
     * @return bool
     */
    public function inRole($role)
    {
        $role = array_first($this->roles, function ($index, $instance) use ($role) {

            if ($instance->getRoleId() == $role || $instance->getRoleSlug() == $role) {
                return true;
            }

            return false;
        });

        return $role !== null;
    }

    /**
     * @param $CheckPermissions
     *
     * @return bool
     */
    public function hasAccess($CheckPermissions)
    {
        $Permissions = $this->roles()->lists('permissions');
        $Permissions->prepend($this->permissions);

        foreach ($Permissions as $Permission) {
            if (isset($Permission[$CheckPermissions]) && $Permission[$CheckPermissions]) {
                return true;
            }
        }

        return false;
    }

    /**
     * @return mixed
     */
    public function roles()
    {
        return $this->belongsToMany(static::$rolesModel, 'role_users', 'user_id', 'role_id')->withTimestamps();
    }

    /**
     * @param $Role
     */
    public function addRole($Role)
    {
        $this->roles()->save($Role);
    }


    /**
     * @param $Role
     */
    public function removeRole($Role)
    {
        $this->roles()->where('slug', $Role)->first()->remove();
    }

    /**
     * @param array|object $Roles
     */
    public function replaceRoles($Roles)
    {
        $this->roles()->remove();
        $this->roles()->saveMany($Roles);
    }


}
