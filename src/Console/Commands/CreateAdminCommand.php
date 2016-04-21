<?php namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Routing\Router;
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
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create user administrator';


    /**
     * Create a new command instance.
     *
     * @return void
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
        foreach (Router::getRoutes() as $key => $value) {
            if (!is_null($value)) {
                $permissions[$value] = 1;
            }
        }

        User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('12345'),
            'permissions' => $permissions,
        ]);
    }


    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return [
            //['example', InputArgument::REQUIRED, 'An example argument.'],
        ];
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            //['example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null],
        ];
    }

}