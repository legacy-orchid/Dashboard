<?php

Route::get('/',[
    'as' => 'dashboard.index', 'uses' => 'DashboardController@index'
]);



Route::group(['namespace' => 'Systems'], function () {
    Route::resource('domains', 'DomainsController');
    Route::resource('settings', 'SettingsController');
    Route::resource('language', 'LanguageController');

    Route::resource('users', 'UsersController');
    Route::resource('roles', 'RolesController');
});


Route::auth();
