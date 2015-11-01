
angular.module("javi",["ngRoute","route-segment","view-segment"]);

//definimos los enrutamientos
angular.module("javi").config(["$routeSegmentProvider","$routeProvider", function($routeSegmentProvider, $routeProvider){

    $routeSegmentProvider.when("/album","album");
    $routeSegmentProvider.when("/banda","banda");
    $routeSegmentProvider.when("/genero","genero");
    $routeProvider.otherwise({
        redirectTo:"/album"
    });

    //segmentos
    $routeSegmentProvider.segment("album",{
        controller: "AlbumCtrl",
        templateUrl: "views/album.html"
    });
    $routeSegmentProvider.segment("banda",{
        controller: "BandaCtrl",
        templateUrl: "views/banda.html"
    });
    $routeSegmentProvider.segment("genero",{
        controller: "GeneroCtrl",
        templateUrl: "views/genero.html"
    });
}]);
