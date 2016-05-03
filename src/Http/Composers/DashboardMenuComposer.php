<?php

namespace Orchid\Dashboard\Http\Composers;

use Cache;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\View\View;
use Orchid\Dashboard\Services\Menu\DashboardMenu;

class DashboardMenuComposer
{
    /**
     * The user repository implementation.
     *
     * @var
     */
    public $dashboardMenu;

    /**
     * @var
     */
    protected $guard;

    /**
     * DashboardMenuComposer constructor.
     *
     * @param \Orchid\Dashboard\Services\Menu\DashboardMenu $dashboardMenu
     * @param \Illuminate\Contracts\Auth\Guard              $guard
     */
    public function __construct(DashboardMenu $dashboardMenu, Guard $guard)
    {
        // Зависимости разрешаются автоматически службой контейнера...
        $this->dashboardMenu = $dashboardMenu;
        $this->guard = $guard;
    }

    /**
     * Bind data to the view.
     *
     * @param View $view
     */
    public function compose(View $view)
    {
        $viewMenu = Cache::remember('dashboard-menu-user-'.$this->guard->user()->id, 10, function () {

                /*
                 * Тут надо перебрать всю меню на наличие прав, и удалить
                 * элементы к которым их нет
                 */
                $user = $this->guard->user();
                $accessCollection = $this->dashboardMenu->container->filter(function ($item) use ($user) {
                    return  (isset($item['arg']['route'])) ? $user->hasAccess($item['arg']['route']) : true;
                });

                return $accessCollection;
            });

        $view->with('DashboardMenu', $viewMenu);
    }
}
