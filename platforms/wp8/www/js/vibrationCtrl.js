var quadrusTest = quadrusTest || {};

quadrusTest.vibrationCtrl = function($scope)
{
    $scope.vibrate = function() {
        navigator.vibrate(500);
    }

    $scope.longVibrate = function() {
        navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500]);
    }
};
