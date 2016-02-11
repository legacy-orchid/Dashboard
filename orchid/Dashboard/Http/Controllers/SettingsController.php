<?php

namespace Orchid\Dashboard\Http\Controllers;

use Orchid\Dashboard\Models\Settings;

class SettingsController extends Controller
{
    public function index()
    {
        return view('dashboard::container.settings', [
            'Settings' => Settings::paginate(15),
        ]);
    }
}
