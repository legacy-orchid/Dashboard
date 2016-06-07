<?php

namespace Orchid\Dashboard\Http\Controllers\Installer;

use Orchid\Dashboard\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Orchid\Dashboard\Helpers\Install\EnvironmentManager;

class EnvironmentController extends Controller
{
    /**
     * @var EnvironmentManager
     */
    protected $EnvironmentManager;

    /**
     * @param EnvironmentManager $environmentManager
     */
    public function __construct(EnvironmentManager $environmentManager)
    {
        $this->EnvironmentManager = $environmentManager;
    }

    /**
     * Display the Environment page.
     *
     * @return \Illuminate\View\View
     */
    public function environment()
    {
        $envConfig = $this->EnvironmentManager->getEnvContent();

        return view('dashboard::container.install.environment', compact('envConfig'));
    }

    /**
     * Processes the newly saved environment configuration and redirects back.
     *
     * @param Request    $input
     * @param Redirector $redirect
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $input, Redirector $redirect)
    {
        $message = $this->EnvironmentManager->saveFile($input);

        return $redirect->route('dashboard::environment')
                        ->with(['message' => $message]);
    }
}
