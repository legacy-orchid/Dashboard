<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Models\Setting;
use Orchid\Dashboard\Observer\SettingObserver;
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
     */
    public function boot(DashboardMenu $dashboardMenu)
    {
        Setting::observe(new SettingObserver());
        $this->registerMenu($dashboardMenu);
    }

    protected function registerMenu(DashboardMenu $dashboardMenu = null)
    {
        $settingsMenu = [
            'slug' => 'Settings',
            'icon' => 'fa fa-cog',
            'url' => '/dashboard/#!/settings',//route('settings'),
            'label' => trans('dashboard::menu.Constants'),
            'groupname' => trans('dashboard::menu.General settings'),
            'childs' => false,
            'divider' => true,
        ];

        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $settingsMenu, 100);
    }

    /**
     * Register the service provider.
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
