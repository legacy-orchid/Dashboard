<?php

    Route::get('/', 'Dashboard@index');

/*
    Route::get('settings', [
        'as' => 'settings',
        'uses' => 'SettingsController@index',
    ]);
*/

    Route::resource('settings', 'Settings');
