angular.module("javi").service("albumStorage",function(){
    return {
        hola : function (h) {
             console.log("entran en hola ", h);
             return "hola" + h;
            }

    };
/*
    this.adios=function(){
        return "adios";
    }




    /*

    console.log("service AlbumStorage");
    var zz="asdasd";
    console.log("zz=", zz);
    var albumesFavoritos=[];
    debugger;
    if (typeof(Storage) !== "undefined") {
        //lo primeo es cargar lo que haya, en caso de que no haya, pues hay que cargarlo del json
        var albumes = [];

        al = JSON.parse(localStorage.getItem("Albumes"));
        if (!al) {
            //es la primera vez, no tengo datos almacenados, genero el JSON con los id y false
            //me recorro el array para generar el nuevo json
            Javiteca.getAlbumes().then (
                function (data){
                    for (var i = 0; i < data.length; i++) {
                        var b = listadoAlbumes[i].id;
                        albumes.push({id: b, favorito: 'false'});
                    }
                }

            );


        } else
            albumes = al;
    } else {
        console.log("no sopoerta storage");
        albumesFavoritos=null;
    }


    this.albumesFavoritos = function(listadoAlbumes) {
        //compruebo si puede tener localstorage
        if (typeof(Storage) !== "undefined") {
            //lo primeo es cargar lo que haya, en caso de que no haya, pues hay que cargarlo del json
            var albumes=[];

            al = JSON.parse(localStorage.getItem("Albumes"));
            if (!al) {
                //es la primera vez, no tengo datos almacenados, genero el JSON con los id y false
                //me recorro el array para generar el nuevo json

                for (var i = 0; i < listadoAlbumes.length; i++) {
                    var b = listadoAlbumes[i].id;
                    albumes.push({id: b, favorito: 'false'});
                }
            } else
                albumes=al;
            return albumes;
        }
        else {//si no contempla el sortage devuelve falso
            return false;
        }

    };

    this.hola= function(){
        console.log("hola");
        return 1;
    };
*/

});