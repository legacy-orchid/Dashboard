<?php

namespace Orchid\Dashboard\Http\Controllers\Installer;

use Orchid\Dashboard\Http\Controllers\Controller;

class WelcomeController extends Controller
{
    /**
     * Display the installer welcome page.
     *
     * @return \Illuminate\View\View
     */
    public function welcome()
    {
        return view('vendor.installer.welcome');
    }
}
