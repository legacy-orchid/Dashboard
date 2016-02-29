var app = angular.module('app',['ngMaterial','ngAnimate','ngRoute']);

app.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/admin', {
        templateUrl: '/build/partials/main/index.html',
        controller: 'mainPage'
    }).when('/link2', {
        templateUrl: '/build/partials/main/index2.html',
        controller: 'secondPage'
    }).otherwise({
        templateUrl:'/build/partials/main/index.html',
        controller: 'mainPage'
    });
}]);
