angular.module("javi").directive("generoDirect", ["Javiteca", function(){
    return{
        restrict: "EA",
        templateUrl: "views/generoDirect.html",
        scope: {
            ge: "="
        },
        link: function (scope) {

            //pulsan en el tr del album
            scope.seleccionado = function(){
                console.log("seleccionado");
                alert("seleccionan " + scope.ge.name);
            }
        }
    };
}]);