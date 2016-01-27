<?php namespace Orchid\Access\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Services\Menu\DashboardMenu;

class AccessServiceProvider extends ServiceProvider
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
    public function boot(DashboardMenu $dashboardMenu)
    {
        $this->registerDatabase();
        $this->registerMenu($dashboardMenu);
    }

    protected function registerDatabase()
    {
        $this->publishes([
            __DIR__ . '/../Database/Migrations/' => database_path('migrations'),
        ], 'migrations');
    }

    protected function registerMenu(DashboardMenu $dashboardMenu = null)
    {

        $settingsMenu = collect([
            'user' => [
                'label' => 'Пользователи',
                'url' => 'http://google.com',
                'icon' => 'fa fa-user',
                'permissions' => [],
            ]
        ]);

        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $settingsMenu, 500);
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

}
