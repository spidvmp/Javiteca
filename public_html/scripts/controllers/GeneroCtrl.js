angular.module("javi").controller("GeneroCtrl",["$scope","Genres","$location", function($scope,Genres, $location){

    $scope.Generos=Genres.data;

    //recojo la notificacion de que quieren el detalle que viene de albumDirect.html->albumDirect.js->album.html->AlbumCtrl
    $scope.detalleGenero = function (idGenero) {
        $location.path("/detalleGenero/" + idGenero);
    }
}]);