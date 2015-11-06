angular.module("javi").directive("albumDirect", ["Javiteca", function(){
    return{
        restrict: "EA",
        templateUrl: "views/albumDirect.html",
        scope: {
            al: "="
        }
    };
}]);