<?php namespace Orchid\Dashboard\Http\Controllers;

use Orchid\Dashboard\Http\Controllers\Controller;

class DashboardController extends Controller
{

    public function index()
    {
        return view('dashboard::index');
    }

}