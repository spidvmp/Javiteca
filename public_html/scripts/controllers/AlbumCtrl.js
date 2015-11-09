angular.module("javi").controller("AlbumCtrl",["$scope","Albums","$location","albumStorage",function($scope,Albums, $location, albumStorage){

        $scope.Albumes=Albums.data;

        //recojo la notificacion de que quieren el detalle que viene de albumDirect.html->albumDirect.js->album.html->AlbumCtrl
        $scope.detalleAlbum = function (idAlbum) {
                $location.path("/detalleAlbum/" + idAlbum);
        };

        /*obtengo los id de los albumes que son favoritos, le paso la coleccion de albumes para el caso de que sea la primera vez que no tenga nada generar los datos
         que se van a guardar y no vuelvo a consultar

        $scope.favoritosHola=albumStorage.hola();
        $scope.favoritosAdios=albumStorage.adios();
*/
}]);