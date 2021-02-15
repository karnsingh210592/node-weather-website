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


angular.module('weatherapp').controller('AboutController', ['$scope', function($scope){
    $scope.title = "About";
}]);
angular.module('weatherapp').controller('WeatherController', ['$scope','$http', function($scope,$http){
    $scope.title = "Get weather for your location";
    $scope.message = '';
    $scope.weatherData = {};
    $scope.showForecastContainer = false;
    $scope.currentDay = new Date();

    $scope.fetchWeatherForLocation = (locationText)=>{
        $scope.showForecastContainer = false;
        if(!locationText){
            $scope.message = "Please enter location to continue."
            return;
        }
        $scope.message = `Loading...`;
        let url = `/weather?address=${locationText}`;

        $http.get(url).then((response)=>{
            if(response.data.error){
                $scope.message = response.data.error;
            }else{
                angular.copy(response.data, $scope.weatherData);
                $scope.showForecastContainer = true;
                $scope.message = '';
            }
        }).catch((e)=>{
            $scope.message = "Unable to load weather currently"
        })
    }
    
}]);
angular.module('weatherapp')
.directive('navbar', function(){
    return{
        templateUrl: 'angular-app/templates/navbar.html'
    }
})