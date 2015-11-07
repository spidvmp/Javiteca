angular.module("javi").directive("albumDirect", [ function(){
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
                console.log("Envio id=",scope.al.id);
            };
        }
    };
}]);