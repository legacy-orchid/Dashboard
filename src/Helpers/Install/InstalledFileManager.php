<?php

namespace Orchid\Dashboard\Helpers\Install;

class InstalledFileManager
{
    /**
     * Update installed file.
     *
     * @return int
     */
    public function update()
    {
        return $this->create();
    }

    /**
     * Create installed file.
     *
     * @return int
     */
    public function create()
    {
        file_put_contents(storage_path('installed'), '');
    }
}
