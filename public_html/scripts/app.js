
anglular.module("javi",["ngRoute","route-segment","view-segment"]);

//definimos los enrutamientos
anglular.module("javi").config(["$routeSegmentProvider","$routeProvider", function($routeSegmentProvider, $routeProvider){

    $routeSegmentProvider.when("/album","albumes");
    $routeSegmentProvider.when("/banda","bandas");
    $routeSegmentProvider.when("/genero","generos");
    $routeProvider.otherwise({
        redirectTo:"/"
    });

    //segmentos
    $routeSegmentProvider.segment("album",{
        controller: "AlbumCtrl",
        templateUrl: "views/album.html"
    });
    $routeSegmentProvider.segment("banda",{
        controller: "ABandaCtrl",
        templateUrl: "views/banda.html"
    });
    $routeSegmentProvider.segment("genero",{
        controller: "GeneroCtrl",
        templateUrl: "views/genero.html"
    });
}]);
