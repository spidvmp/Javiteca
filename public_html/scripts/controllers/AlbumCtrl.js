angular.module("javi").controller("AlbumCtrl",["$scope","Albums","$location",function($scope,Albums, $location){

        $scope.Albumes=Albums.data;

        //recojo la notificacion de que quieren el detalle que viene de albumDirect.html->albumDirect.js->album.html->AlbumCtrl
        $scope.detalleAlbum = function (idAlbum) {
                console.log("estoy en albumctrl" );
                $location.path("/detalleAlbum/" + idAlbum);
        };

}]);