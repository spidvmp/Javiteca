angular.module("javi").controller("BandaCtrl",["$scope","Bands","$location", function($scope,Bands, $location){

    $scope.Bandas = Bands.data;

    //recojo la notificacion de que quieren el detalle que viene de bandaDirect.html->bandaDirect.js->banda.html->bandaCtrl
    $scope.detalleBanda = function (idBanda) {
        $location.path("/detalleBanda/" + idBanda);
    };
}]);
