<?php

    Route::group(['middleware' => 'web', 'prefix' => 'socket', 'namespace' => 'Orchid\Socket\Http\Controllers'],
        function () {
            Route::get('/', 'SocketController@index');
        });