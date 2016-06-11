<?php

namespace Orchid\Dashboard\Http\Controllers\Installer;

use Illuminate\Routing\Redirector;
use Orchid\Dashboard\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
    public function create(Request $request, Redirector $redirect)
    {
        $exitCode = Artisan::call('make:admin', [
            'name' =>  $request->input('name'),
            'email' =>  $request->input('email'),
            'password' =>  $request->input('password'),
        ]);

        return redirect()->route('dashboard::final')
            ->with(['message' => $exitCode]);

    }
}
