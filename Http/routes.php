<?php

Route::get('/', 'DashboardController@index');


Route::resource('settings', 'Systems/SettingsController', [
    'only' => [
        'index', 'show', 'store', 'update', 'destroy'
    ]]);


Route::auth();