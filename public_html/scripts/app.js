
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
                return Javiteca.getAlbum($route.current.params.idAlbum);
            }]
        }
    });

    $routeProvider.when("/detalleGenero/:idGenero", {
        controller: "DetalleGeneroCtrl",
        templateUrl: "views/DetalleGenero.html",
        resolve: {
            Genero:["Javiteca", "$route", function (Javiteca, $route) {
                return Javiteca.getGenero($route.current.params.idGenero);
            }]
        }
    });

    $routeProvider.when("/detalleBanda/:idBanda", {
        controller: "DetalleBandaCtrl",
        templateUrl: "views/DetalleBanda.html",
        resolve: {
            Banda:["Javiteca", "$route", function (Javiteca, $route) {
                return Javiteca.getBanda($route.current.params.idBanda);
            }]
        }
    });

    $routeProvider.otherwise({
        redirectTo: "/album"
    });

}]);
