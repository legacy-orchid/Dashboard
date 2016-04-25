<?php

namespace Orchid\Dashboard\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Database\QueryException;
use Route;
use Orchid\Dashboard\Models\User;

class CreateAdminCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:admin';

    /**
     * @var string
     */
    protected $signature = 'make:admin {name} {email} {password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create user administrator';

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fire()
    {
        $permissions = [];
        foreach (Route::getRoutes() as $key => $route) {
            if (!is_null($route->getName())) {
                $permissions[$route->getName()] = 1;
            }
        }

        try {
            User::create([
                'name' => $this->argument('name'),
                'email' => $this->argument('email'),
                'password' => bcrypt($this->argument('password')),
                'permissions' => $permissions,
            ]);

            $this->info('User created successfully.');
        } catch (QueryException $e) {
            $this->error('User already exists!');
        }
    }
}
