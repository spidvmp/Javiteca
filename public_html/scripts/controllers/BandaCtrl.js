angular.module("javi").controller("BandaCtrl",["$routeSegment","$scope","Bands", function($routeSegment,$scope,Bands){

    $scope.Bandas = Bands.data;

}]);
