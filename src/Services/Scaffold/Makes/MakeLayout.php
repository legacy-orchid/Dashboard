<?php
/**
 * Created by PhpStorm.
 * User: fernandobritofl
 * Date: 4/22/15
 * Time: 11:49 PM.
 */

namespace Orchid\Dashboard\Services\Scaffold\Makes;

use Illuminate\Filesystem\Filesystem;
use Orchid\Dashboard\Console\Commands\ScaffoldMakeCommand;

class MakeLayout
{
    use MakerTrait;

    public function __construct(ScaffoldMakeCommand $scaffoldCommand, Filesystem $files)
    {
        $this->files = $files;
        $this->scaffoldCommandObj = $scaffoldCommand;

        $this->start();
    }

    protected function start()
    {
        //$this->putViewLayout('Layout', 'stubs/scaffold/html_assets/layout.stub', 'layout.blade.php');
        $this->putViewLayout('Error', 'stubs/scaffold/html_assets/error.stub', 'error.blade.php');
    }

    /**
     * @param $path_resource
     *
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function putViewLayout($name, $stub, $file)
    {
        $path_file = $this->getPathResource().$file;
        $path_stub = __DIR__.'/../../../Console/'.$stub;

        if (!$this->files->exists($path_file)) {
            $html = $this->files->get($path_stub);
            $this->files->put($path_file, $html);

            $this->scaffoldCommandObj->info("$name created successfully.");
        } else {
            $this->scaffoldCommandObj->comment("Skip $name, because already exists.");
        }
    }

    /**
     * Get the path to where we should store the view.
     *
     * @return string
     */
    protected function getPathResource()
    {
        return './resources/views/';
    }
}
