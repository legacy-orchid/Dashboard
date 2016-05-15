<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;

class InstallerServiceProvider extends ServiceProvider
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
        $this->publishFiles();

        Route::group(['prefix' => 'install', 'as' => 'LaravelInstaller::', 'namespace' => 'RachidLaasri\LaravelInstaller\Controllers'], function () {
            Route::get('/', [
                'as' => 'welcome',
                'uses' => 'WelcomeController@welcome',
            ]);

            Route::get('environment', [
                'as' => 'environment',
                'uses' => 'EnvironmentController@environment',
            ]);

            Route::post('environment/save', [
                'as' => 'environmentSave',
                'uses' => 'EnvironmentController@save',
            ]);

            Route::get('requirements', [
                'as' => 'requirements',
                'uses' => 'RequirementsController@requirements',
            ]);

            Route::get('permissions', [
                'as' => 'permissions',
                'uses' => 'PermissionsController@permissions',
            ]);

            Route::get('database', [
                'as' => 'database',
                'uses' => 'DatabaseController@database',
            ]);

            Route::get('final', [
                'as' => 'final',
                'uses' => 'FinalController@finish',
            ]);
        });
    }

    /**
     * Bootstrap the application events.
     */
    public function boot()
    {
    }

    /**
     * Publish config file for the installer.
     */
    protected function publishFiles()
    {
        $this->publishes([
            __DIR__.'/../Config/installer.php' => base_path('config/installer.php'),
        ]);

        $this->publishes([
            __DIR__.'/../assets' => public_path('installer'),
        ], 'public');

        $this->publishes([
            __DIR__.'/../Views' => base_path('resources/views/vendor/installer'),
        ]);

        $this->publishes([
            __DIR__.'/../Lang' => base_path('resources/lang'),
        ]);
    }
}
