angular.module("javi").directive("generoDirect", ["generoStorage", function(generoStorage){
    return{
        restrict: "EA",
        templateUrl: "views/generoDirect.html",
        scope: {
            ge: "=",
            onGeneroClick: "&"
        },
        link: function (scope) {

            //pulsan en el tr del album
            scope.seleccionado = function(){
                scope.onGeneroClick({idGenero: scope.ge.id});
            };
            scope.esFavorito=function(idGenero){
                return generoStorage.esFavorito(idGenero);
            };

            scope.cambiaFavorito=function(idGenero){
                return generoStorage.cambiaFavorito(idGenero);
            }
        }
    };
}]);