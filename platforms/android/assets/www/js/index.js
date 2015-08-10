var angapp = angular.module('testApp', ['ngRoute']);

angapp.controller('deviceStatusCtrl', quadrusTest.deviceStatusCtrl);
angapp.controller('capturePhotoCtrl', quadrusTest.capturePhotoCtrl);
angapp.controller('trackAccelerationCtrl', quadrusTest.trackAccelerationCtrl);
angapp.controller('geolocationCtrl', quadrusTest.geolocationCtrl);

angapp.controller('mainCtrl', function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$routeParams = $routeParams;
	$scope.$location = $location;
});

angapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/TrackAcceleration', {
		templateUrl: 'trackAcceleration.html',
		controller: 'trackAccelerationCtrl'
	})
	.when('/CapturePhoto', {
		templateUrl: 'capturePhoto.html',
		controller: 'capturePhotoCtrl'
	})
	.when('/Geolocate', {
		templateUrl: 'geolocation.html',
		controller: 'geolocationCtrl'
	})
	.when('/DeviceStatus', {
		templateUrl: 'deviceStatus.html',
		controller: 'deviceStatusCtrl'
	})
	.otherwise({
		redirectTo: '/DeviceStatus'
	});
}]);

