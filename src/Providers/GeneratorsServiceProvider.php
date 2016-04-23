<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;

class GeneratorsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        $this->registerScaffoldGenerator();
    }

    /**
     * Register the make:scaffold generator.
     */
    private function registerScaffoldGenerator()
    {
        $this->app->singleton('command.dashboard.scaffold', function ($app) {
            return $app['Orchid\Dashboard\Commands\ScaffoldMakeCommand'];
        });

        $this->commands('command.dashboard.scaffold');
    }
}
