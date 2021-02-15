angular.module('weatherapp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'angular-app/templates/weather.html',
            controller: "WeatherController"
        })
        .when('/about',{
            templateUrl: 'angular-app/templates/about.html',
            controller: "AboutController"
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

