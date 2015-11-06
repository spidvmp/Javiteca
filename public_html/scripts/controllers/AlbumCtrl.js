angular.module("javi").controller("AlbumCtrl",["$scope","Albums",function($scope,Albums){

        $scope.Albumes=Albums.data;

        //recojo la notificacion de que quieren el detalle que viene de albumDirect.html->albumDirect.js->album.html->AlbumCtrl
        $scope.detalleAlbum = function (idAlbum) {
                $location.path("/detalleAlbum/" + idAlbum);
        };

}]);