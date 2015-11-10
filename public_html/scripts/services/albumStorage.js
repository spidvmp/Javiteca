angular.module("javi").service("albumStorage",["Properties","Javiteca",function(Properties, Javiteca){

    var albumesFavoritos={};
    //compruebo si puedo usar el localstorage
    if (typeof(Storage) !== "undefined") {
        //lo primeo es cargar lo que haya, en caso de que no haya, pues hay que cargarlo del json

        al = JSON.parse(localStorage.getItem("Albumes"));
        if (!al) {
            //es la primera vez, no tengo datos almacenados, genero el JSON con los id y false
            //me recorro el array para generar el nuevo json
            Javiteca.getAlbumes().then (
                function (data){

                    for (var i = 0; i < data.data.length; i++) {
                        var b = data.data[i].id;
                        //el dato se guarda en este formarto { id : true/false } asi accedo muy rapido y puedo cambiar los datos facilmente
                        albumesFavoritos[b]='false';
                    }
                    save();
                }

            );


        } else
            albumes = al;
    } else {
        console.log("no sopoerta storage");
        albumesFavoritos=null;
    }

    function save (){
        console.log("GRABO ", albumesFavoritos.length, " albumes");
    }

    function favorito(id){
        return albumesFavoritos.filter(function(albumesFavoritos){return albumesFavoritos.id === id});
    }

    return {

        cambiaFavorito: function(id) {
            //cambia el estado del favorito y despues devuelve el icono que tiene que mostrar
            if ( albumesFavoritos[id] === 'true' ){
                albumesFavoritos[id] = 'false';

            } else {
                albumesFavoritos[id] = 'true';
            }
            return this.esFavorito(id);
        },

        esFavorito: function(id) {
            //compruba si es favorito o no, devuelve un icono y otro y es el que se muestra
           if ( albumesFavoritos[id] === 'false')
                return Properties.noEsFavoritoIcon;
            else
                return Properties.esFavoritoIcon;

        }
    };
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

}]);