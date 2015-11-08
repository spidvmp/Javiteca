angular.module("javi").directive("albumesDetalleDirect", [ function(){
    return{
        restrict: "EA",
        templateUrl: "views/albumesDetalleDirect.html",
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
        }
    };
}]);