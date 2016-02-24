<?php

Route::get('/', 'DashboardController@index');


Route::resource('settings', 'SettingsController', [
    'only' => [
        'index', 'show', 'store', 'update', 'destroy'
    ]]);



Route::auth();
