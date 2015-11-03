angular.module("javi").controller("IndexCtrl",["$route","$scope",function($route,$scope){

//pongo controles para saber que opcion de labarra han pulsado y mover la clase 'active' para que se mueva la sola activa
    $scope.rutaAlbum=function(){
        return $route.current && $route.current.$$route.originalPath === '/album';
    }

    $scope.rutaBanda=function() {
        return $route.current && $route.current.$$route.originalPath === '/banda';
    }

    $scope.rutaGenero=function() {
        return $route.current && $route.current.$$route.originalPath === '/genero';
    }

}]);