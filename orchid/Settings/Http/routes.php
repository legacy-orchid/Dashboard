<?php


Route::get('settings', [
    'as' => 'settings',
    'uses' => 'Orchid\Settings\Http\Controllers\SettingsController@index'
]);