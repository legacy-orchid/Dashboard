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
        $settingsMenu = [
            'slug' => 'Settings',
            'icon' => 'fa fa-cog',
            'route' => route('dashboard.settings.index'),
            'label' => trans('dashboard::menu.Constants'),
            'groupname' => trans('dashboard::menu.General settings'),
            'childs' => false,
            'divider' => false,
        ];

        $localizationMenu = [
            'slug' => 'Localization',
            'icon' => 'fa fa-language',
            'route' => route('dashboard.language.index'),
            'label' => trans('dashboard::menu.Localization'),
            'groupname' => null,
            'childs' => false,
            'divider' => true,
        ];

        $errorMenu = [
            'slug' => 'Logs',
            'icon' => 'fa fa-bug',
            'route' => route('dashboard.log.index'),
            'label' => trans('dashboard::menu.Logs'),
            'groupname' => trans('dashboard::menu.Errors'),
            'childs' => false,
            'divider' => true,
        ];

        $seoMenu = [
            'slug' => 'Static pages',
            'icon' => 'fa fa-list-alt',
            'route' => route('dashboard.static.index'),
            'label' => trans('dashboard::menu.Static pages'),
            'groupname' => trans('dashboard::menu.Search Engine Optimization'),
            'childs' => false,
            'divider' => false,
        ];

        $siteMapMenu = [
            'slug' => 'Site Map',
            'icon' => 'fa fa-sitemap',
            'route' => route('dashboard.index'),
            'label' => trans('dashboard::menu.Site Map'),
            'childs' => false,
            'divider' => true,
        ];

        $CRUDMenu = [
            'slug' => 'CRUD',
            'icon' => 'fa fa-clone',
            'route' => route('dashboard.crud.index'),
            'label' => 'CRUD',
            'childs' => false,
            'divider' => false,
        ];

        $typePostMenu = [
            'slug' => 'Types posts',
            'icon' => 'fa fa-pencil-square-o',
            'route' => route('dashboard.types.index'),
            'label' => trans('dashboard::menu.Types posts'),
            'childs' => false,
            'divider' => false,
        ];

        $categoryMenu = [
            'slug' => 'Categories',
            'icon' => 'fa fa-briefcase',
            'route' => route('dashboard.index'),
            'label' => trans('dashboard::menu.Categories'),
            'childs' => false,
            'divider' => true,
        ];

        $menuMenu = [
            'slug' => 'Menu',
            'icon' => 'fa fa-bars',
            'route' => route('dashboard.index'),
            'label' => trans('dashboard::menu.Menu'),
            'groupname' => trans('dashboard::menu.Posts Managements'),
            'childs' => false,
            'divider' => false,
        ];

        $usersMenu = [
            'slug' => 'Users',
            'icon' => 'fa fa-users',
            'route' => route('dashboard.users.index'),
            'label' => trans('dashboard::menu.Users'),
            'groupname' => trans('dashboard::menu.Users'),
            'childs' => false,
            'divider' => false,
        ];

        $groupsMenu = [
            'slug' => 'Groups',
            'icon' => 'fa fa-lock',
            'route' => route('dashboard.roles.index'),
            'label' => trans('dashboard::menu.Groups'),
            'childs' => false,
            'divider' => true,
        ];

        $postMenu = [
            'slug' => 'Post',
            'icon' => 'fa fa-pencil',
            'route' => route('dashboard.index'),
            'label' => trans('dashboard::menu.Common posts'),
            'groupname' => trans('dashboard::menu.The interface and data'),
            'childs' => true,
            'divider' => false,
        ];

        $blocksMenu = [
            'slug' => 'Block',
            'icon' => 'fa fa-cubes',
            'route' => route('dashboard.index'),
            'label' => trans('dashboard::menu.Common blocks'),
            'childs' => true,
            'divider' => true,
        ];

        $dashboardMenu->add('Posts', 'dashboard::partials.leftMenu', $postMenu, 1);
        $dashboardMenu->add('Posts', 'dashboard::partials.leftMenu', $blocksMenu, 2);

        $dashboardMenu->add('Tools', 'dashboard::partials.leftMenu', $menuMenu, 1);
        $dashboardMenu->add('Tools', 'dashboard::partials.leftMenu', $typePostMenu, 2);
        $dashboardMenu->add('Tools', 'dashboard::partials.leftMenu', $categoryMenu, 3);

        $dashboardMenu->add('Tools', 'dashboard::partials.leftMenu', $seoMenu, 10);
        $dashboardMenu->add('Tools', 'dashboard::partials.leftMenu', $siteMapMenu, 30);
        $dashboardMenu->add('Tools', 'dashboard::partials.leftMenu', $CRUDMenu, 40);

        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $errorMenu, 500);
        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $localizationMenu, 300);
        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $settingsMenu, 1);

        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $usersMenu, 501);
        $dashboardMenu->add('Systems', 'dashboard::partials.leftMenu', $groupsMenu, 601);
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
