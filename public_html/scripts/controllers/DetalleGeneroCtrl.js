angular.module("javi").controller("DetalleGeneroCtrl",["$scope","Genero",function($scope,Genero) {

    $scope.genero = Genero[0];
}]);