var quadrusTest = quadrusTest || {};

quadrusTest.trackAccelerationCtrl = function($scope)
{
    $scope.watchId = 0;
    $scope.previousReading = {
        x: 0,
        y: 0,
        z: 0
    };
    $scope.message = '';
    
    $scope.trackAcceleration = function() {

        $scope.watchId = navigator.accelerometer.watchAcceleration(function (acceleration) {
              var changes = {},
              bound = 0.2;
              if ($scope.previousReading.x !== null) {
                  changes.x = Math.abs($scope.previousReading.x - acceleration.x);
                  changes.y = Math.abs($scope.previousReading.y - acceleration.y);
                  changes.z = Math.abs($scope.previousReading.z - acceleration.z);
              }
               
              if (changes.x > bound && changes.y > bound && changes.z > bound) {
                shaken();
              }
               
              $scope.previousReading = {
                  x: acceleration.x,
                  y: acceleration.y,
                  z: acceleration.z
              }
        }, onError, { frequency: 2000 });

        setTimeout(function() {
            navigator.accelerometer.clearWatch($scope.watchId);
            $scope.watchId = 0;
        }, 5000);        
    }
 
    function shaken(){
        alert("Shaken");
    }
    
    // Error
    function onError() {
        alert('onError!');
    }
};
