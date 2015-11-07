angular.module("javi").directive("bandaDirect", ["Javiteca", function(){
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
            }
        }
    };
}]);