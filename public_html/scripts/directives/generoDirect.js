angular.module("javi").directive("generoDirect", ["Javiteca", function(){
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
            }
        }
    };
}]);