angular.module("javi").controller("DetalleGeneroCtrl",["$scope","$location","Genero",function($scope, $location,Genero) {

    $scope.genero = Genero[0];

    //recojo la notificacion de que quiero ver el detalle de un album desde el detalle de la banda
    $scope.detalleAlbum= function(idAlbum){
        $location.path("/detalleAlbum/" + idAlbum);
    }
}]);