<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;

class SocketServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Boot the application events.
     */
    public function boot()
    {
        $this->registerConfig();
//        $this->registerProviders();
    }

    /**
     * Register config.
     */
    protected function registerConfig()
    {
        $this->publishes([
            __DIR__.'/../Config/socket.php' => config_path('socket.php'),
            __DIR__.'/../Services/Socket/routes.php' => app_path('/Socket/routes.php'),
        ]);
        $this->mergeConfigFrom(
            __DIR__.'/../Config/socket.php', 'socket'
        );
    }

    /**
     * Register the service provider.
     */
    public function register()
    {
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [
            'Orchid\Dashboard\Providers\ConsoleServiceProvider',
        ];
    }
}
