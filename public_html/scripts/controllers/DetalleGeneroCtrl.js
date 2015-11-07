angular.module("javi").controller("DetalleGeneroCtrl",["$scope","Album",function($scope,Album) {

    $scope.Album = Album.data;
}]);