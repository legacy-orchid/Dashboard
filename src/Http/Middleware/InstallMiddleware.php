<?php

namespace Orchid\Dashboard\Http\Middleware;

use App;
use Closure;
use Illuminate\Http\Request;

class InstallMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($this->alreadyInstalled()) {
            abort(404);
        }
        $this->languageInstalled($request);

        return $next($request);
    }

    /**
     * If application is already installed.
     *
     * @return bool
     */
    public function alreadyInstalled()
    {
        return file_exists(storage_path('installed'));
    }


    public function languageInstalled(Request $request)
    {
        $language = $request->session()->get('language', function () use ($request) {

            if (!is_null($request->input('language'))) {
                $request->session()->put('language', $request->input('language'));
                return $request->session()->get('language');
            } else {
                return 'en';
            }


        });
        App::setLocale($language);
    }

}