var app = angular.module('app',['ngAnimate','ngRoute']);

app.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/admin', {
        templateUrl: '/build/partials/main/index.html',
        controller: 'mainPage'
    }).when('/roles', {
        templateUrl: '/orchid/tpl/systems/roles.html',
        controller: 'systems.roles'
    }).when('/users', {
        templateUrl: '/orchid/tpl/systems/users.html',
        controller: 'systems.users'
    }).when('/language', {
        templateUrl: '/orchid/tpl/systems/language.html',
        controller: 'systems.language'
    }).when('/domains', {
        templateUrl: '/orchid/tpl/systems/domains.html',
        controller: 'systems.domains'
    }).when('/settings', {
        templateUrl: '/orchid/tpl/systems/settings.html',
        controller: 'systems.settings'
    }).otherwise({
        templateUrl:'/build/partials/main/index.html',
        controller: 'mainPage'
    });
}]);
