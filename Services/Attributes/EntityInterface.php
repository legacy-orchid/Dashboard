<?php namespace Orchid\Dashboard\Attributes\Access;

interface EntityInterface
{
    /**
     * @return mixed
     */
    public function attributes();

    /**
     * @return mixed
     */
    public function getAttributes();
}
