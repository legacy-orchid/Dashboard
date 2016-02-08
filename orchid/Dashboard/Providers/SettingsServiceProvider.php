<?php namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Services\Menu\DashboardMenu;
use Orchid\Dashboard\Models\Settings;
use Orchid\Dashboard\Observer\SettingsObserver;

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
        $this->registerMenu($dashboardMenu);
    }


    protected function registerMenu(DashboardMenu $dashboardMenu = null){

        $settingsMenu = [
            'slug' => 'Settings',
            'icon' => 'fa fa-cog',
            'url' => route('settings'),
            'label' => trans('dashboard::menu.Constants'),
            'groupname' => trans('dashboard::menu.General settings'),
            'childs' => false,
            'divider' => true,
        ];

        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $settingsMenu, 100);
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
