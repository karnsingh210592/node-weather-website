angular.module("weatherapp",["ngRoute"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"angular-app/templates/weather.html",controller:"WeatherController"}).when("/about",{templateUrl:"angular-app/templates/about.html",controller:"AboutController"}).otherwise({redirectTo:"/"})}]),angular.module("weatherapp").controller("AboutController",["$scope",function(e){e.title="About"}]),angular.module("weatherapp").controller("WeatherController",["$scope","$http",function(t,a){t.title="Get weather for your location",t.message="",t.weatherData={},t.showForecastContainer=!1,t.currentDay=new Date,t.fetchWeatherForLocation=e=>{t.showForecastContainer=!1,e?(t.message="Loading...",e=`/weather?address=${e}`,a.get(e).then(e=>{e.data.error?t.message=e.data.error:(angular.copy(e.data,t.weatherData),t.showForecastContainer=!0,t.message="")}).catch(e=>{t.message="Unable to load weather currently"})):t.message="Please enter location to continue."}}]),angular.module("weatherapp").directive("navbar",function(){return{templateUrl:"angular-app/templates/navbar.html"}});