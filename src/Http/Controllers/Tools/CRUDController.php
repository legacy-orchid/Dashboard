<?php

namespace Orchid\Dashboard\Http\Controllers\Tools;

use Illuminate\Http\Request;
use App\Http\Requests;

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
