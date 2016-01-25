<?php namespace Orchid\Socket\Http\Controllers;

use Pingpong\Modules\Routing\Controller;

class SocketController extends Controller
{

    public function index()
    {
        return view('socket::index');
    }

}