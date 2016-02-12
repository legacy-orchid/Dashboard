<?php

namespace Orchid\Dashboard\Http\Controllers;

use Orchid\Dashboard\Models\Setting;

class SettingsController extends Controller
{
    public function index()
    {
        return response()->json(
            Setting::sortable()->paginate(15)
        );
    }
}
