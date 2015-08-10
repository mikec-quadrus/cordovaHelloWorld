var angapp = angular.module('testApp', ['ngRoute']);

angapp.controller('deviceStatusCtrl', quadrusTest.deviceStatusCtrl);
angapp.controller('testDeviceCtrl', quadrusTest.testDeviceCtrl);

angapp.controller('mainCtrl', function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$routeParams = $routeParams;
	$scope.$location = $location;
});

angapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/TestDevice', {
		templateUrl: 'www/testDevice.html',
		controller: 'testDeviceCtrl'
	})
	.when('/DeviceStatus', {
		templateUrl: 'www/deviceStatus.html',
		controller: 'deviceStatusCtrl'
	})
	.otherwise({
		redirectTo: '/DeviceStatus'
	});
}]);

