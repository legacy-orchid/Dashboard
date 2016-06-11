<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Http\Middleware\InstallMiddleware;
use Route;
class InstallerServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * @var string
     */
    protected $namespace = 'Orchid\Dashboard\Http\Controllers\Installer';


    /**
     * Register the service provider.
     * @param Router $router
     */
    public function register()
    {
        $this->publishFiles();
        Route::middleware('install', InstallMiddleware::class);
        Route::group(['middleware' => ['web', 'install'], 'prefix' => 'install', 'as' => 'dashboard::', 'namespace' => $this->namespace], function () {
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

            Route::get('administrator', [
                'as' => 'administrator',
                'uses' => 'AdministratorController@administrator',
            ]);

            Route::post('administrator/create', [
                'as' => 'administratorCreate',
                'uses' => 'AdministratorController@create',
            ]);

            Route::get('final', [
                'as' => 'final',
                'uses' => 'FinalController@finish',
            ]);
        });
    }

    /**
     * Publish config file for the installer.
     */
    protected function publishFiles()
    {
        $this->publishes([
            __DIR__.'/../Config/installer.php' => base_path('config/installer.php'),
        ]);

        /*
        $this->publishes([
            __DIR__.'/../Resources/assets' => public_path('dashboa'),
        ], 'public');

        $this->publishes([
            __DIR__.'/../Resources/views' => base_path('resources/views/vendor/orchid'),
        ]);

        $this->publishes([
            __DIR__.'/../Resources/lang' => base_path('resources/lang'),
        ]);
        */
    }

    /**
     * Bootstrap the application events.
     */
    public function boot()
    {
    }
}
