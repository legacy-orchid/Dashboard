<?php

Route::get('/',[
    'as' => 'dashboard.index', 'uses' => 'DashboardController@index'
]);



Route::group(['namespace' => 'Systems'], function () {
    Route::resource('settings', 'SettingsController');
    Route::resource('language', 'LanguageController');

    Route::resource('log', 'LogController');

    Route::resource('users', 'UsersController');
    Route::resource('roles', 'RolesController');
});


Route::group(['namespace' => 'Tools'], function () {
    Route::resource('static', 'StaticPagesController');
});


Route::auth();
