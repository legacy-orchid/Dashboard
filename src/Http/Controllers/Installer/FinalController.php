<?php

namespace Orchid\Dashboard\Http\Controllers\Installer;

use Orchid\Dashboard\Http\Controllers\Controller;
use Orchid\Dashboard\Helpers\Install\InstalledFileManager;

class FinalController extends Controller
{
    /**
     * Update installed file and display finished view.
     *
     * @param InstalledFileManager $fileManager
     *
     * @return \Illuminate\View\View
     */
    public function finish(InstalledFileManager $fileManager)
    {
        $fileManager->update();

        return view('dashboard::container.install.finished');
    }
}
