var quadrusTest = quadrusTest || {};

quadrusTest.testDeviceCtrl = function($scope)
{
	$scope.imageData = null;
	
    function onSuccess(imageData) {
		$scope.imageData = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
	
    $scope.capturePhoto = function() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50 });
    }
};
