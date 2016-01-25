<?php namespace Orchid\Dashboard\Providers;


use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Services\Menu\DashboardMenu;
use View;
use Orchid\Dashboard\Http\Composers\DashboardMenuComposer;
use Orchid\Dashboard\Providers\RouteServiceProvider;

class DashboardServiceProvider extends ServiceProvider
{


    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot(Router $router)
    {

        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();


        //Композер для меню
        View::composer('dashboard:*', DashboardMenuComposer::class);

    }

    /**
     * Register translations.
     *
     * @return void
     */
    public function registerTranslations()
    {
        $langPath = base_path('resources/lang/vendor/orchid/dashboard');

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, 'dashboard');
        } else {
            $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'dashboard');
        }
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            __DIR__ . '/../Config/config.php' => config_path('dashboard.php'),
        ]);
        $this->mergeConfigFrom(
            __DIR__ . '/../Config/config.php', 'dashboard'
        );
    }

    /**
     * Register views.
     *
     * @return void
     */
    public function registerViews()
    {
        $viewPath = base_path('resources/views/vendor/orchid/dashboard');

        $sourcePath = __DIR__ . '/../Resources/views';

        $this->publishes([
            $sourcePath => $viewPath,
        ]);

        $this->loadViewsFrom(array_merge(array_map(function ($path) {
            return $path . '/vendor/orchid/dashboard';
        }, \Config::get('view.paths')), [$sourcePath]), 'dashboard');
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        // Регистрируем меню дашборда
        $this->app->singleton(DashboardMenu::class, function ($app) {
            return new DashboardMenu();
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [
        ];
    }


}
