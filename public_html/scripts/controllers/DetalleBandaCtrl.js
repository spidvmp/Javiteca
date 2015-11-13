angular.module("javi").controller("DetalleBandaCtrl",["$scope","Banda","$location","bandaStorage",function($scope,Banda,$location,bandaStorage) {
    $scope.banda = Banda[0];

    //recojo la notificacion de que quiero ver el detalle de un album desde el detalle de la banda
    $scope.detalleAlbum= function(idAlbum){
        $location.path("/detalleAlbum/" + idAlbum);
    }

    //es para saber si es favorito
    $scope.esFavorito = function(idBanda) {
        return bandaStorage.esFavorito(idBanda);
    }
}]);