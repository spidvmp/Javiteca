angular.module("javi").directive("albumDirect", ["Javiteca", function(){
    return{
        restrict: "EA",
        templateUrl: "views/albumDirect.html",
        scope: {
            al: "="
        },
        link: function (scope) {

            //pulsan en el tr del album
            scope.seleccionado = function(){
                console.log("seleccionado");
                alert("seleccionan " + scope.al.title);
            }
        }
    };
}]);