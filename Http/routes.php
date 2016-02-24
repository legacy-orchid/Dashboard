<?php

Route::get('/', 'DashboardController@index');


Route::resource('settings', 'SettingsController', [
    'only' => [
        'index', 'show', 'store', 'update', 'destroy'
    ]]);

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);
