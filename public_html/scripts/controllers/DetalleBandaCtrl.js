angular.module("javi").controller("DetalleBandaCtrl",["$scope","Banda","$location",function($scope,Banda,$location) {
    $scope.banda = Banda[0];

    //recojo la notificacion de que quiero ver el detalle de un album desde el detalle de la banda
    $scope.detalleAlbum= function(idAlbum){
        $location.path("/detalleAlbum/" + idAlbum);
    }

}]);