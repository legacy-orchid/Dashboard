<?php namespace Orchid\Dashboard\Http\Composers;

use Cache;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\View\View;
use Orchid\Dashboard\Services\Menu\DashboardMenu;

class DashboardMenuComposer
{

    /**
     * The user repository implementation.
     *
     * @var $adminMenu
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
     * @param  View $view
     *
     * @return void
     */
    public function composer(View $view)
    {
        $dashboardMenu = Cache::remember('dashboardMenu-user-' /*. $this->guard->user()->id */, 10, function () {

            /**
             * Тут надо перебрать всю меню на наличие прав, и удалить
             * элементы к которым их нет
             */

            $user = $this->guard->user();
            $accessCollection = collect();

            foreach ($this->dashboardMenu as $key => $value) {
                $accessElement = $value->filter(function ($item) use ($user) {
                    return true;//$user->hasAccess($item['url']);
                });
                $accessCollection->put($key, $accessElement);
            }

            return $accessCollection->all();
        });

        $view->with('DashboardMenu', $dashboardMenu);
    }

}