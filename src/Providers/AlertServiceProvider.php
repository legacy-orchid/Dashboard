<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;

class AlertServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register the service provider.
     */
    public function register()
    {
        $this->app->bind(
            'Orchid\Dashboard\Services\Alert\SessionStore',
            'Orchid\Dashboard\Services\Alert\LaravelSessionStore'
        );

        $this->app->singleton('alert', function () {
            return $this->app->make('Orchid\Dashboard\Services\Alert\Alert');
        });
    }

    /**
     * Bootstrap the application events.
     */
    public function boot()
    {
    }
}
