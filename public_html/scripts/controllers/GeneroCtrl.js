angular.module("javi").controller("GeneroCtrl",["$scope","Genres",function($scope,Genres){

    $scope.Generos=Genres.data;


}]);