<?php

namespace Orchid\Dashboard\Services\Access;

trait RoleAccess
{
    /**
     * @return mixed
     */
    public static function getUsersModel()
    {
        return static::$usersModel;
    }

    /**
     * @param $usersModel
     */
    public static function setUsersModel($usersModel)
    {
        static::$usersModel = $usersModel;
    }

    /**
     * The Users relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(static::$usersModel, 'role_users', 'role_id', 'user_id')->withTimestamps();
    }

    /**
     * @return mixed
     */
    public function getRoleId()
    {
        return $this->getKey();
    }

    /**
     * @return mixed
     */
    public function getRoleSlug()
    {
        return $this->slug;
    }

    /**
     * @return mixed
     */
    public function getUsers()
    {
        return $this->users;
    }
}
