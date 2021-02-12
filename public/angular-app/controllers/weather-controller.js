angular.module('weatherapp').controller('WeatherController', ['$scope','$http', function($scope,$http){
    $scope.title = "Get weather for your location";
    $scope.message = '';

    $scope.fetchWeatherForLocation = (locationText)=>{

        if(!locationText){
            $scope.message = "Please enter location to continue."
            return;
        }
        $scope.message = `Loading...`;
        let url = `/weather?address=${locationText}`;

        $http.get(url).then((response)=>{
            if(response.data.error){
                $scope.message = data.error;
            }else{
                $scope.message = `Location is ${response.data.location}.${response.data.forecast}`;
            }
        });
    }
    
}]);