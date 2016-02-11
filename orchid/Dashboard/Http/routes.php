<?php

    Route::get('/', 'DashboardController@index');

    Route::get('settings', [
        'as' => 'settings',
        'uses' => 'SettingsController@index',
    ]);
