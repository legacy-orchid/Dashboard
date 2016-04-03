<?php

namespace Orchid\Dashboard\Http\Controllers\Systems;

use File;
use Orchid\Dashboard\Http\Controllers\Controller;
use Orchid\Dashboard\Services\Log\LogViewer;

class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return User
     */
    public function getIndex()
    {
        return view('dashboard::container.systems.log', [
            'logs' => LogViewer::all(),
            'files' => LogViewer::getFiles(true),
            'current_file' => LogViewer::getFileName(),
        ]);
    }

    /**
     * @param $file
     * @param bool $download
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getShow($file)
    {
        LogViewer::setFile(base64_decode($file));

        return view('dashboard::container.systems.log', [
            'logs' => LogViewer::all(),
            'files' => LogViewer::getFiles(true),
            'current_file' => LogViewer::getFileName(),
        ]);
    }

    /**
     * @param $file
     *
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function getDownload($file)
    {
        return response()->download(storage_path('logs/') . base64_decode($file));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $file
     *
     * @return \Illuminate\Http\Response
     */
    public function deleteDestroy($file)
    {
        File::delete(storage_path('logs/') . base64_decode($file));

        return redirect()->route('dashboard.log.index');
    }
}
