angular.module("javi").directive("albumDirect", ["albumStorage", function(albumStorage){
    return{
        restrict: "EA",
        templateUrl: "views/albumDirect.html",
        scope: {
            al: "=",
            onAlbumClick: "&" //establecemos la notificacion hacia el album.html
        },
        link: function (scope) {

            //pulsan en el tr del album
            scope.seleccionado = function(){
                //envio la notificacion y el id para localizarlo
                scope.onAlbumClick({idAlbum: scope.al.id});
            };

            scope.esFavorito=function(idAlbum){
                console.log("esFavorito" + idAlbum);

               console.log(albumStorage.hola(idAlbum));
                /*
                albumStorage.hola(idAlbum).then(
                    function(response){
                        console.debug(response);
                        return response;
                    }
                );
                */

            }

        }
    };
}]);