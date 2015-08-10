var quadrusTest = quadrusTest || {};

quadrusTest.geolocationCtrl = function($scope)
{
    var onSuccess = function(position) {
		$scope.currentLatitude = position.coords.latitude;
		$scope.currentLongitude = position.coords.longitude;
        
        $scope.altitude = position.coords.altitude;
        $scope.accuracy = position.coords.accuracy;
        $scope.altitudeAccuracy = position.coords.altitudeAccuracy;
        $scope.heading = position.coords.heading;
        $scope.speed = position.coords.speed;
        $scope.timestamp = new Date(position.timestamp);
        
        $scope.$apply();
    };

    var onFail = function(message) {
        $scope.$apply();
        alert('Failed because: ' + message);
    };
	
    $scope.locate = function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onFail, { enableHighAccuracy: true, timeout: 2000, maximumAge: 60000 });
    };
};
