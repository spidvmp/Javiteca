angular.module("javi").controller("DetalleBandaCtrl",["$scope","Banda",function($scope,Banda) {
    $scope.banda = Banda[0];
}]);