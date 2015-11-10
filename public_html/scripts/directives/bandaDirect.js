angular.module("javi").directive("bandaDirect", ["bandaStorage", function(bandaStorage){
    return{
        restrict: "EA",
        templateUrl: "views/bandaDirect.html",
        scope: {
            ba: "=",
            onBandaClick: "&"
        },
        link: function (scope) {

            //pulsan en el tr del album
            scope.seleccionado = function(){
                scope.onBandaClick({idBanda: scope.ba.id});
            };

            scope.esFavorito=function(idBanda){
                    return bandaStorage.esFavorito(idBanda);
                };

            scope.cambiaFavorito=function(idBanda){
                return bandaStorage.cambiaFavorito(idBanda);
            }
        }
    };
}]);