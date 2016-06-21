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
    mix.less('./src/Resources/assets/less/app.less', './src/Resources/dist/css/orchid.css');
    mix.copy('./src/Resources/assets/vendor/bootstrap/dist/fonts/', './src/Resources/dist/fonts');
    mix.copy('./src/Resources/assets/vendor/font-awesome/fonts/', './src/Resources/dist/fonts');
    mix.copy('./src/Resources/assets/vendor/summernote/dist/fonts/', './src/Resources/dist/fonts');

    mix.scripts([
        "./src/Resources/assets/vendor/jquery/dist/jquery.min.js",
        "./src/Resources/assets/vendor/bootstrap/dist/js/bootstrap.min.js",
        "./src/Resources/assets/vendor/vue/dist/vue.js",
        "./src/Resources/assets/vendor/vue-resource/dist/vue-resource.js",
        "./src/Resources/assets/vendor/ace-builds/src/ace.js",
        "./src/Resources/assets/vendor/ace-builds/src/mode-php.js",
        "./src/Resources/assets/vendor/ace-builds/src/theme-solarized_dark.js",
        "./src/Resources/assets/js/app.js",
        "./src/Resources/assets/js/modules/**",
        "./src/Resources/assets/js/components/**",
        "./src/Resources/assets/js/directives/**",
        "./src/Resources/assets/vendor/summernote/dist/summernote.min.js"
    ], './src/Resources/dist/js/orchid.js');

    //mix.browserify('./src/Resources/dist/js/orchid.js', './src/Resources/dist/js/orchid.js');
});
