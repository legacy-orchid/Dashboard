var elixir = require('laravel-elixir');
var browserify = require('browserify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less','public/css/app.css');
    mix.scripts([
        "./public/components/jquery/dist/jquery.min.js",
        "./public/components/bootstrap/dist/js/bootstrap.min.js",
        "./resources/assets/js/partials/leftMenu.js"
    ], 'public/js/app.js');
    mix.version(["public/css/app.css","public/js/app.js"]);

    mix.browserify('router.js')


});