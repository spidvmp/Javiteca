angular.module("javi").controller("DetalleBandaCtrl",["$scope","Album",function($scope,Album) {

    $scope.Album = Album.data;
}]);