var elixir = require('laravel-elixir');
var gulp = require('gulp');

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
    mix.less('./Resources/assets/less/app.less', './Resources/dist/css/orchid.css');

    mix.copy('./Resources/assets/vendor/bootstrap/dist/fonts/', './Resources/dist/fonts');
    mix.copy('./Resources/assets/vendor/font-awesome/fonts/', './Resources/dist/fonts');

    mix.scripts([
        "./Resources/assets/vendor/angular/angular.min.js",
        "./Resources/assets/vendor/angular-animate/angular-animate.min.js",
        "./Resources/assets/vendor/angular-route/angular-route.min.js",
        "./Resources/assets/vendor/jquery/dist/jquery.min.js",
        "./Resources/assets/vendor/bootstrap/dist/js/bootstrap.min.js",
        "./Resources/assets/js/app.js",
        "./Resources/assets/js/controller/**",
        "./Resources/assets/js/service/**",
        "./Resources/assets/js/directive/**"
    ], './Resources/dist/js/orchid.js');
});
