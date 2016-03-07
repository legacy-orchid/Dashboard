<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Routing\Router;
use Orchid\Dashboard\Models\Setting;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to the controller routes in your routes file.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Orchid\Dashboard\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @param \Illuminate\Routing\Router $router
     */
    public function boot(Router $router)
    {
        parent::boot($router);

        /*
         * bindings
         */
        $router->bind('settings', function ($value) {
            return Setting::where('key', $value)->firstOrFail();
        });
    }

    /**
     * Define the routes for the application.
     *
     * @param \Illuminate\Routing\Router $router
     */
    public function map(Router $router)
    {
        $router->group(['middleware' => 'web', 'prefix' => 'dashboard', 'namespace' => $this->namespace],
            function ($router) {
                require __DIR__.'/../Http/routes.php';
            });
    }
}
