var angapp = angular.module('testApp', ['ngRoute']);

angapp.controller('capturePhotoCtrl', quadrusTest.capturePhotoCtrl);
angapp.controller('deviceStatusCtrl', quadrusTest.deviceStatusCtrl);
angapp.controller('geolocationCtrl', quadrusTest.geolocationCtrl);
angapp.controller('trackAccelerationCtrl', quadrusTest.trackAccelerationCtrl);
angapp.controller('vibrationCtrl', quadrusTest.vibrationCtrl);

angapp.controller('mainCtrl', function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$routeParams = $routeParams;
	$scope.$location = $location;
});

angapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/CapturePhoto', {
		templateUrl: 'capturePhoto.html',
		controller: 'capturePhotoCtrl'
	})
	.when('/DeviceStatus', {
		templateUrl: 'deviceStatus.html',
		controller: 'deviceStatusCtrl'
	})
	.when('/Geolocate', {
		templateUrl: 'geolocation.html',
		controller: 'geolocationCtrl'
	})
	.when('/TrackAcceleration', {
		templateUrl: 'trackAcceleration.html',
		controller: 'trackAccelerationCtrl'
	})
	.when('/Vibrate', {
		templateUrl: 'vibration.html',
		controller: 'vibrationCtrl'
	})
	.otherwise({
		redirectTo: '/DeviceStatus'
	});
}]);

