angular.module("javi").controller("DetalleBandaCtrl",["$scope","Banda","Javiteca",function($scope,Banda,Javiteca) {
    $scope.banda = Banda[0];

    $scope.wiki=Javiteca.getWikipediaLink(Banda[0].name);


}]);