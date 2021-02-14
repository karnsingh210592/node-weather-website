angular.module('weatherapp').controller('WeatherController', ['$scope','$http', function($scope,$http){
    $scope.title = "Get weather for your location";
    $scope.message = '';
    $scope.weatherData = {};
    $scope.showForecastContainer = false;
    $scope.currentDay = new Date();

    $scope.fetchWeatherForLocation = (locationText)=>{

        if(!locationText){
            $scope.message = "Please enter location to continue."
            return;
        }
        $scope.message = `Loading...`;
        $scope.showForecastContainer = false;
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