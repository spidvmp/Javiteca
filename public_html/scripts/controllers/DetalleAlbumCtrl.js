angular.module("javi").controller("DetalleAlbumCtrl",["$scope","Album",function($scope,Album) {

    $scope.Album = Album.data;
}]);