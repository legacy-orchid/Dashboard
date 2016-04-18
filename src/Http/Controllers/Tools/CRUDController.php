<?php

namespace Orchid\Dashboard\Http\Controllers\Tools;

use Illuminate\Http\Request;
use Orchid\Dashboard\Http\Controllers\Controller;

class CRUDController extends Controller
{
    /**
     * 
     */
    public function getIndex()
    {
        return view('dashboard::container.tools.crud');
    }

    /**
     * @param $type
     * @param array $arg
     */
    public function postStore($type, $arg = [])
    {
    }
}
