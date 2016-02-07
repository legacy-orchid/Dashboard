<?php namespace Orchid\Dashboard\Providers;


use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Http\Composers\DashboardMenuComposer;
use Orchid\Dashboard\Services\Menu\DashboardMenu;
use View;

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
    public function boot(Router $router, DashboardMenu $dashboardMenu)
    {

        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();

        $this->registerMenu($dashboardMenu);

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
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'dashboard');
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
     * Регистрация элементов меню
     * @param DashboardMenu|null $dashboardMenu
     */
    protected function registerMenu(DashboardMenu $dashboardMenu = null)
    {
        $panelMenu = [
            'slug' => 'Dashboard',
            'icon' => 'fa fa-tachometer',
            'url' => '#',
            'label' => 'Панель',
        ];
        $postMenu = [
            'slug' => 'Posts',
            'icon' => 'fa fa-pencil-square-o',
            'url' => '#',
            'label' => 'Записи',
            'childs' => true
        ];
        $toolsMenu = [
            'slug' => 'Tools',
            'icon' => 'fa fa-wrench',
            'url' => '#',
            'label' => 'Инструменты',
            'childs' => true
        ];
        $systemsMenu = [
            'slug' => 'Systems',
            'icon' => 'fa fa-cogs',
            'url' => '#',
            'label' => 'Система',
            'childs' => true
        ];

        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $panelMenu, 1);
        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $postMenu, 100);
        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $toolsMenu, 500);
        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $systemsMenu, 1000);
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
