<?php
    
Route::get('/', [
    'as' => 'dashboard.index',
    'uses' => 'DashboardController@index',
]);

Route::group(['namespace' => 'Systems'], function () {
    Route::resource('settings', 'SettingsController');
    Route::resource('language', 'LanguageController');
    Route::controller('log', 'LogController', [
        'getIndex' => 'dashboard.log.index',
        'getShow' => 'dashboard.log.show',
        'getDownload' => 'dashboard.log.download',
        'deleteDestroy' => 'dashboard.log.destroy',
    ]);

    Route::resource('users', 'UsersController');
    Route::resource('roles', 'RolesController');
});

Route::group(['namespace' => 'Tools'], function () {

    Route::resource('editor', 'EditorController');
    Route::resource('types', 'TypesController');
    Route::resource('static', 'StaticPagesController');
    Route::resource('crud', 'CRUDController', [
        'only' => [
            'index',
            'sto',
        ],
    ]);
});
