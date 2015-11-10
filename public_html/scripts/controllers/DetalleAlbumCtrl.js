angular.module("javi").controller("DetalleAlbumCtrl",["$scope","Album","albumStorage", function($scope,Album, albumStorage) {
    $scope.album = Album[0];

}]);