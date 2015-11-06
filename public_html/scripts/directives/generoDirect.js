angular.module("javi").directive("generoDirect", ["Javiteca", function(){
    return{
        restrict: "EA",
        templateUrl: "views/generoDirect.html",
        scope: {
            ge: "="
        }
    };
}]);