angular.module("javi").controller("GeneroCtrl",["$routeSegment","$scope","Genres",function($routeSegment,$scope,Genres){

    $scope.Generos=Genres.data;


}]);