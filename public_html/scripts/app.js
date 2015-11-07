
angular.module("javi",["ngRoute"]);


angular.module("javi").config(["JavitecaProvider", "Properties", function(JavitecaProvider, Properties){
    JavitecaProvider.setAlbum(Properties.albumes);
    JavitecaProvider.setGenero(Properties.generos);
    JavitecaProvider.setBanda(Properties.bandas);

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

    $routeProvider.when("/banda",{
        controller: "BandaCtrl",
        templateUrl: "views/banda.html",
        resolve: {
            Bands: [ "Javiteca", function(Javiteca){
                return Javiteca.getBandas();
            }]
        }
    });
    $routeProvider.when("/genero",{
        controller: "GeneroCtrl",
        templateUrl: "views/genero.html",
        resolve: {
            Genres: [ "Javiteca", function(Javiteca){
                return Javiteca.getGeneros();
            }]
        }
    });

    //defino las paginas de detalle
    $routeProvider.when("/detalleAlbum/:idAlbum", {
        controller: "DetalleAlbumCtrl",
        templateUrl: "views/DetalleAlbum.html",
        resolve: {
            Album:["Javiteca", "$route", function (Javiteca, $route) {
                console.log("Buscando para detalleAlbum id ",$route.current.params.idAlbum);
                return  {nombre:'hola'};
            }]
        }
    });

    $routeProvider.otherwise({
        redirectTo: "/album"
    });

}]);
