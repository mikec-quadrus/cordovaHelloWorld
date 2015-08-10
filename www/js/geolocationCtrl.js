var quadrusTest = quadrusTest || {};

quadrusTest.geolocationCtrl = function($scope)
{
    var onSuccess = function(position) {
        $scope.message = "located!  processing starting...";

		$scope.currentLatitude = position.coords.latitude;
		$scope.currentLongitude = position.coords.longitude;
        
        $scope.altitude = position.coords.altitude;
        $scope.accuracy = position.coords.accuracy;
        $scope.altitudeAccuracy = position.coords.altitudeAccuracy;
        $scope.heading = position.coords.heading;
        $scope.speed = position.coords.speed;
        $scope.timestamp = new Date(position.timestamp);
        
        $scope.message = "located!  procesing complete!!!";
        
        $scope.$apply();
    };

    var onFail = function(message) {
        $scope.message = message;
        $scope.$apply();
        alert('Failed because: ' + message);
    };
	
    $scope.locate = function() {
        $scope.message = "locating...";
        navigator.geolocation.getCurrentPosition(onSuccess, onFail);
        $scope.message = "getCurrentPosition called";
    };
};
