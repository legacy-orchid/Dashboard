<?php namespace Orchid\Settings\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Services\Menu\DashboardMenu;
use Orchid\Settings\Models\Settings;
use Orchid\Settings\Observer\SettingsObserver;

class SettingsServiceProvider extends ServiceProvider
{

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = true;

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot(DashboardMenu $dashboardMenu)
    {
        Settings::observe(new SettingsObserver);


        include __DIR__ . '/../Http/routes.php';

        $this->registerDatabase();
        $this->registerMenu($dashboardMenu);
    }


    protected function registerDatabase()
    {
        $this->publishes([
            __DIR__ . '/../Database/Migrations/' => database_path('migrations'),
        ], 'migrations');
    }


    protected function registerMenu(DashboardMenu $dashboardMenu = null){

        $settingsMenu = collect([
            'Settings' => [
                'url'   => 'http://google.com',
                'label' => 'Настройки',
            ]
        ]);

        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $settingsMenu, 100);

    }



    /**
     * Register the service provider.
     *
     * @return void
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
        return [];
    }

}
