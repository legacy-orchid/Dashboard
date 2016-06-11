<?php

namespace Orchid\Dashboard\Http\Controllers\Installer;

use Illuminate\Routing\Redirector;
use Orchid\Dashboard\Http\Controllers\Controller;
use Orchid\Dashboard\Http\Requests\Request;
use Artisan;

class AdministratorController extends Controller
{
    /**
     * Administrator view
     */
    public function administrator()
    {
        return view('dashboard::container.install.administrator');
    }
    
    /**
     * @param Request $input
     * @param Redirector $redirect
     */
    public function create(Request $input, Redirector $redirect)
    {
        $exitCode = Artisan::call('make:admin');
        dd($exitCode);

        return redirect()->route('dashboard::finish')
            ->with(['message' => $exitCode]);

    }
}
