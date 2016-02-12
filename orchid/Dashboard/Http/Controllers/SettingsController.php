<?php

namespace Orchid\Dashboard\Http\Controllers;

use Orchid\Dashboard\Models\Setting;

class SettingsController extends Controller
{
    public function index()
    {
        return view('dashboard::container.settings', [
            'Settings' => Setting::sortable()->paginate(15),
        ]);
    }
}
