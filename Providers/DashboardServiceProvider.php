<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Http\Composers\DashboardMenuComposer;
use Orchid\Dashboard\Services\Menu\DashboardMenu;
use View;
use Blade;

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
     */
    public function boot(Router $router, DashboardMenu $dashboardMenu)
    {
        $this->registerDatabase();
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();

        $this->registerMenu($dashboardMenu);
        $this->registerProviders();
        //Композер для меню
        View::composer('dashboard:*', DashboardMenuComposer::class);
        Blade::directive('widget', function ($key) {
            return "<?php echo (new \\Orchid\\Dashboard\\Services\\Widget\\Widget)->get({$key}); ?>";
        });
    }

    /**
     * Register migrate.
     */
    protected function registerDatabase()
    {
        $this->publishes([
            __DIR__.'/../Database/Migrations/' => database_path('migrations'),
        ], 'migrations');
    }

    /**
     * Register translations.
     */
    public function registerTranslations()
    {
        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'dashboard');
    }

    /**
     * Register config.
     */
    protected function registerConfig()
    {
        $this->publishes([
            __DIR__.'/../Config/dashboard.php' => config_path('dashboard.php'),
        ]);
        $this->mergeConfigFrom(
            __DIR__.'/../Config/dashboard.php', 'dashboard'
        );
    }

    /**
     * Register views.
     */
    public function registerViews()
    {
        $viewPath = base_path('resources/views/vendor/orchid/dashboard');
        $sourcePath = __DIR__.'/../Resources/views';

        $this->publishes([
            $sourcePath => $viewPath,
        ]);

        $this->loadViewsFrom(array_merge(array_map(function ($path) {
            return $path.'/vendor/orchid/dashboard';
        }, \Config::get('view.paths')), [$sourcePath]), 'dashboard');
    }

    /**
     * Регистрация элементов меню.
     *
     * @param DashboardMenu|null $dashboardMenu
     */
    protected function registerMenu(DashboardMenu $dashboardMenu = null)
    {
        $panelMenu = [
            'slug' => 'Dashboard',
            'icon' => 'fa fa-tachometer',
            'url' => '#',
            'label' => trans('dashboard::menu.Dashboard'),
        ];
        $postMenu = [
            'slug' => 'Posts',
            'icon' => 'fa fa-pencil-square-o',
            'url' => '#',
            'label' => trans('dashboard::menu.Posts'),
            'childs' => true,
        ];
        $toolsMenu = [
            'slug' => 'Tools',
            'icon' => 'fa fa-wrench',
            'url' => '#',
            'label' => trans('dashboard::menu.Tools'),
            'childs' => true,
        ];
        $systemsMenu = [
            'slug' => 'Systems',
            'icon' => 'fa fa-cogs',
            'url' => '#',
            'label' => trans('dashboard::menu.Systems'),
            'childs' => true,
        ];

        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $panelMenu, 1);
        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $postMenu, 100);
        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $toolsMenu, 500);
        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $systemsMenu, 1000);
    }

    public function registerProviders()
    {
        $this->app->register(\Kyslik\ColumnSortable\ColumnSortableServiceProvider::class);

        $this->app->register(\Orchid\Dashboard\Providers\RouteServiceProvider::class);
        $this->app->register(\Orchid\Dashboard\Providers\ConsoleServiceProvider::class);
        $this->app->register(\Orchid\Dashboard\Providers\SocketServiceProvider::class);
        $this->app->register(\Orchid\Dashboard\Providers\SettingsServiceProvider::class);
    }

    /**
     * Register the service provider.
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
