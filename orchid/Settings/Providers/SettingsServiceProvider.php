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
    protected $defer = false;

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

        $settingsMenu = [
            'slug' => 'Settings',
            'icon' => 'fa fa-cog',
                'url'   => 'http://google.com',
                'label' => 'Настройки',
            'childs' => true
        ];


        $cildsSettingsMenu = [
            'slug' => 'ChildsSettings',
            'icon' => 'fa fa-cog',
            'url' => 'http://google.com',
            'label' => 'Настройки2',
            'groupname' => 'Общие настройки',
        ];


        $cildsSettingsMenu2 = [
            'slug' => 'ChildsSettings2',
            'icon' => 'fa fa-cog',
            'url' => 'http://google.com',
            'label' => 'Настройки3',
            'divider' => true,
            'childs' => true
        ];


        $cildsSettingsMenu3 = [
            'slug' => 'ChildsSettingsgregr',
            'icon' => 'fa fa-cog',
            'url' => 'http://google.com',
            'label' => 'Настройки4',
        ];



        $dashboardMenu->add('leftMenu', 'dashboard::partials.leftMenu', $settingsMenu, 100);
        $dashboardMenu->add('Settings', 'dashboard::partials.leftMenu', $cildsSettingsMenu, 98);
        $dashboardMenu->add('Settings', 'dashboard::partials.leftMenu', $cildsSettingsMenu2, 99);
        $dashboardMenu->add('ChildsSettings2', 'dashboard::partials.leftMenu', $cildsSettingsMenu3, 99);


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
