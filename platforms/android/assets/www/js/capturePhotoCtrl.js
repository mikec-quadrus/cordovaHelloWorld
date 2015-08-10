var quadrusTest = quadrusTest || {};

quadrusTest.capturePhotoCtrl = function($scope)
{
	$scope.imageData = null;
    
    var onSuccess = function(imageData) {
		$scope.imageData = imageData;
        //$scope.picData = "data:image/jpeg;base64," +imageData;
        $scope.$apply();
    };

    var onFail = function(message) {
        alert('Failed because: ' + message);
    };
	
    $scope.capturePhoto = function() {
        navigator.camera.getPicture(onSuccess, onFail, 
            { 
                quality: 50,
                sourceType: navigator.camera.PictureSourceType.CAMERA,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                targetWidth: 200,
                targetHeight: 200
            });
    }
};
