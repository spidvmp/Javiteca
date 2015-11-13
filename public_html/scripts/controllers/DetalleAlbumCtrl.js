angular.module("javi").controller("DetalleAlbumCtrl",["$scope","Album","albumStorage", function($scope,Album, albumStorage) {
    $scope.album = Album[0];

    //esto es para mostrar si es favorito o no
    $scope.esFavorito = function(idAlbum) {
        return albumStorage.esFavorito(idAlbum);
    }
}]);