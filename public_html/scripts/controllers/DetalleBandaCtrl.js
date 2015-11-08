angular.module("javi").controller("DetalleBandaCtrl",["$scope","Banda","Javiteca",function($scope,Banda,Javiteca) {
    $scope.banda = Banda[0];

}]);