angular.module("javi").directive("albumDirect", ["albumStorage", function(albumStorage){
    return{
        restrict: "EA",
        templateUrl: "views/albumDirect.html",
        scope: {
            al: "=",
            //imagen: "=",
            onAlbumClick: "&" //establecemos la notificacion hacia el album.html
        },
        link: function (scope) {

            //pulsan en el tr del album
            scope.seleccionado = function(){
                //envio la notificacion y el id para localizarlo
                scope.onAlbumClick({idAlbum: scope.al.id});
            };

            scope.esFavorito=function(idAlbum){
                return albumStorage.esFavorito(idAlbum);
            };

            scope.cambiaFavorito=function(idAlbum){
                return albumStorage.cambiaFavorito(idAlbum);
            }

        }
    };
}]);