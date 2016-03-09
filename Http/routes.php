<?php

Route::get('/', 'DashboardController@index');



Route::group(['namespace' => 'Systems'], function () {
    Route::resource('domains', 'DomainsController');
    Route::resource('settings', 'SettingsController');
});


Route::auth();
