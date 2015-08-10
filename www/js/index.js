var angapp = angular.module('testApp', ['ngRoute']);

angapp.controller('deviceStatusCtrl', quadrusTest.deviceStatusCtrl);

angapp.controller('mainCtrl', function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$routeParams = $routeParams;
	$scope.$location = $location;
});

angapp.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/TestDevice', {
		templateUrl: 'www/testDevice.html',
		controller: 'testDeviceCtrl'
	});
	$routeProvider.when('/DeviceStatus', {
		templateUrl: 'www/deviceStatus.html',
		controller: 'deviceStatusCtrl'
	});
	$routeProvider.otherwise({
		templateUrl: 'www/deviceStatusTemp.html',
		controller: 'deviceStatusCtrl'
	});
}
