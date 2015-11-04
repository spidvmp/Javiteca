angular.module("javi",["ngRoute","route-segment","view-segment"]);

//definomos provider

angular.module("javi").config(["JavitecaProvider", "Properties", function(JavitecaProvider, Properties){
    JavitecaProvider.setAlbum(Properties.albumes);
    JavitecaProvider.setGenero(Properties.generos);
    JavitecaProvider.setBanda(Properties.bandas);
    debugger;
}]);

//definimos los enrutamientos
angular.module("javi").config(["$routeProvider", function( $routeProvider){

    $routeProvider.when("/album",{
        controller: "AlbumCtrl",
        templateUrl: "views/album.html",
        resolve: {
            Albums: [ "Javiteca", function(Javiteca){
                return Javiteca.getAlbumes();
            }]
        }
    });
    $routetProvider.when("/banda",{
        controller: "BandaCtrl",
        templateUrl: "views/banda.html",
        resolve: {
            Bands: [ "Javiteca", function(Javiteca){
                return Javiteca.getBands();
            }]
        }
    });
    $routeProvider.when("/genero",{
        controller: "GeneroCtrl",
        templateUrl: "views/genero.html",
        resolve: {
            Genres: [ "Javiteca", function(Javiteca){
                return Javiteca.getGenres();
            }]
        }
    });
    //ruta por defecto
    $routeProvider.otherwise({
        redirectTo: "/album"
    });
}]);
