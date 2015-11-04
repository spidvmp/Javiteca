angular.module("javi").controller("BandaCtrl",["$scope","Bands", function($scope,Bands){

    $scope.Bandas = Bands.data;

}]);
