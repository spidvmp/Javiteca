angular.module("javi").controller("AlbumCtrl",["$scope","Albums",function($scope,Albums){

        $scope.Albumes=Albums.data;

}]);