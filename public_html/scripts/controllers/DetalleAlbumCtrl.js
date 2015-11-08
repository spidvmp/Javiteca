angular.module("javi").controller("DetalleAlbumCtrl",["$scope","Album","Javiteca",function($scope,Album, Javiteca) {
    $scope.album = Album[0];

    //$scope.wiki=Javiteca.getYouTubeLink(Album[0].band.name, Album[0].tracklist);

}]);