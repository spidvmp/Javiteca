angular.module("javi").directive("bandaDirect", ["Javiteca", function(){
    return{
        restrict: "EA",
        templateUrl: "views/bandaDirect.html",
        scope: {
            ba: "="
        },
        link: function (scope) {

            //pulsan en el tr del album
            scope.seleccionado = function(){
                console.log("seleccionado");
                alert("seleccionan " + scope.ba.name);
            }
        }
    };
}]);