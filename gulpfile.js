var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
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
    mix.copy('./Resources/assets/vendor/summernote/dist//fonts/', './Resources/dist/fonts');

    mix.scripts([
        "./Resources/assets/vendor/jquery/dist/jquery.min.js",
        "./Resources/assets/vendor/bootstrap/dist/js/bootstrap.min.js",
        "./Resources/assets/js/components/**",
        "./Resources/assets/js/directives/**",
        "./Resources/assets/vendor/summernote/dist/summernote.min.js"
    ], './Resources/dist/js/orchid.js');

    mix.browserify('./Resources/dist/js/orchid.js', './Resources/dist/js/orchid.js');
});
