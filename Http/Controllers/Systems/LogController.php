<?php

namespace Orchid\Dashboard\Http\Controllers\Systems;

use Orchid\Dashboard\Http\Controllers\Controller;
use Orchid\Dashboard\Http\Requests\UsersRequests;
use Orchid\Dashboard\Models\User;
use Orchid\Dashboard\Services\Log\LogViewer;
use Request;

class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return User
     */
    public function index()
    {
        if (Request::input('l')) {
            LogViewer::setFile(base64_decode(Request::input('l')));
        }
        if (Request::input('dl')) {
            return Response::download(LogViewer::pathToLogFile(base64_decode(Request::input('dl'))));
        } elseif (Request::has('del')) {
            File::delete(LogViewer::pathToLogFile(LogViewer(Request::input('del'))));
            return Redirect::to(Request::url());
        }
        $logs = LogViewer::all();
        return view('dashboard::container.systems.log', [
            'logs' => $logs,
            'files' => LogViewer::getFiles(true),
            'current_file' => LogViewer::getFileName()
        ]);
    }

}
