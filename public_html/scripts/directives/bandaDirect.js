angular.module("javi").directive("bandaDirect", ["Javiteca", function(){
    return{
        restrict: "EA",
        templateUrl: "views/bandaDirect.html",
        scope: {
            ba: "="
        }
    };
}]);