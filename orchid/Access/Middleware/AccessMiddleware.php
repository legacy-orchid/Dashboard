<?php namespace Orchid\Access\Middleware;


use Closure;
use Illuminate\Contracts\Auth\Guard;
use Route;

class AccessMiddleware
{

    protected $auth;
    protected $routeActive;

    /**
     * AccessMiddleware constructor.
     *
     * @param \Illuminate\Contracts\Auth\Guard $auth
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
        $this->routeActive = Route::currentRouteName();
    }

    /**
     * @param          $request
     * @param \Closure $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($this->auth->check() && $this->auth->user()->hasAccess($this->routeActive)) {
            return $next($request);
        } else {
            abort(404);
        }
    }

}
