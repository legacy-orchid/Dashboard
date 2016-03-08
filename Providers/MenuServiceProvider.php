<?php

namespace Orchid\Dashboard\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Dashboard\Services\Menu\DashboardMenu;

class MenuServiceProvider extends ServiceProvider
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
        $domainsMenu = [
            'slug' => 'Web domains',
            'icon' => 'fa fa-globe',
            'url' => route('dashboard.domains.index'), //'/dashboard/#!/settings', //route('settings'),
            'label' => trans('dashboard::menu.Web domains'),
            'groupname' => trans('dashboard::menu.General settings'),
            'childs' => false,
            'divider' => false,
        ];

        $localizationMenu = [
            'slug' => 'Localization',
            'icon' => 'fa fa-language',
            'url' => route('dashboard.domains.index'), //'/dashboard/#!/settings', //route('settings'),
            'label' => trans('dashboard::menu.Localization'),
            'groupname' => null,
            'childs' => false,
            'divider' => true,
        ];

        $errorMenu = [
            'slug' => 'Localization',
            'icon' => 'fa fa-language',
            'url' => route('dashboard.domains.index'), //'/dashboard/#!/settings', //route('settings'),
            'label' => trans('dashboard::menu.Localization'),
            'groupname' => null,
            'childs' => false,
            'divider' => true,
        ];

        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $localizationMenu, 300);
        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $domainsMenu, 1);
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
