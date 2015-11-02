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
        templateUrl: "views/album.html",
        resolve: {
            Albums: [ "AlbumsProvider", function(AlbumsProvider){
                return AlbumsProvider.getAlbums();
            }]
        }
    });
    $routeSegmentProvider.segment("banda",{
        controller: "BandaCtrl",
        templateUrl: "views/banda.html",
        resolve: {
            Bands: [ "BandsProvider", function(BandsProvider){
                return BandsProvider.getBands();
            }]
        }
    });
    $routeSegmentProvider.segment("genero",{
        controller: "GeneroCtrl",
        templateUrl: "views/genero.html",
        resolve: {
            Genres: [ "GenresProvider", function(GenresProvider){
                return GenresProvider.getGenres();
            }]
        }
    });
}]);
