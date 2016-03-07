app.factory('mainService', ['$http',function ($http) {

    return {
        get : function() {

            return console.log('that ok, it`s is service');
        }
    }

}]);
