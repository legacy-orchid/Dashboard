<?php namespace Orchid\Settings\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Services\Menu\DashboardMenu;

class SettingsServiceProvider extends ServiceProvider
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

        $this->registerConfig();
        $this->registerDatabase();

        $this->registerMenu($dashboardMenu);

    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            __DIR__ . '/../Config/orchid.php' => config_path('orchid.php'),
        ]);
        $this->mergeConfigFrom(
            __DIR__ . '/../Config/orchid.php', 'orchid'
        );
    }

    protected function registerDatabase()
    {
        $this->publishes([
            __DIR__ . '/../Database/Migrations/' => database_path('migrations'),
        ], 'migrations');
    }



    protected function registerMenu(DashboardMenu $dashboardMenu = null){

        $settingsMenu = collect([
            'item' => [
                        'url' => 'http://google.com',
                        'name' => 'Настройки',
                        ],
            'item' => [
                'url' => 'http://google.com',
                'name' => 'Настройки',
            ],
            'item' => [
                'url' => 'http://google.com',
                'name' => 'Настройки',
            ]
        ]);

        $dashboardMenu ->place('leftMenu');
         $dashboardMenu              ->template('dashboard::partials.leftMenu');
          $dashboardMenu             ->with($settingsMenu);
          $dashboardMenu             ->sortBy(1);
        $dashboardMenu             ->add();



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
