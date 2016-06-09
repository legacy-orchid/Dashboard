<?php
/**
 * Created by PhpStorm.
 * User: fernandobritofl
 * Date: 4/22/15
 * Time: 10:34 PM.
 */

namespace Orchid\Dashboard\Services\Scaffold\Makes;

use Illuminate\Filesystem\Filesystem;
use Orchid\Dashboard\Console\Commands\ScaffoldMakeCommand;

class MakeModel
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
        $name = $this->scaffoldCommandObj->getObjName('Name');
        $modelPath = $this->getPath($name, 'model');

        if (!$this->files->exists($modelPath)) {
            $this->scaffoldCommandObj->call('make:model', [
                'name' => 'Models/'.$name,
            ]);
        }
    }

    protected function getStub()
    {
        return __DIR__.'/../../../stubs/widget.stub';
    }
}
