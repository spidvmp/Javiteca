angular.module("javi").controller("AlbumCtrl",["$routeSegment","$scope","Albums",function($routeSegment,$scope,Albums){

        $scope.Albumes=Albums.data;

}]);