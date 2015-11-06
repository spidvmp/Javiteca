angular.module("javi").directive("generoDirect", ["Javiteca", function(){
    return{
        restrict: "EA",
        templateUrl: "views/ageneroDirect.html",
        scope: {
            post: "="
        }
    };
}]);