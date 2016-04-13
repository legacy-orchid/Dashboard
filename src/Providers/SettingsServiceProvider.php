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
        $this->registerMenu($dashboardMenu);
    }

    protected function registerMenu(DashboardMenu $dashboardMenu = null)
    {
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
