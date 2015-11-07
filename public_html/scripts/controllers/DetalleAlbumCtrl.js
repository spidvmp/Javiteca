angular.module("javi").controller("DetalleAlbumCtrl",["$scope","Album",function($scope,Album) {
    $scope.album = Album[0];
}]);