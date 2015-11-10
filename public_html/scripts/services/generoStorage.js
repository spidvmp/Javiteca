angular.module("javi").service("generoStorage",["Properties","Javiteca",function(Properties, Javiteca){

    var generosFavoritos={};
    //compruebo si puedo usar el localstorage
    if (typeof(Storage) !== "undefined") {
        //lo primeo es cargar lo que haya, en caso de que no haya, pues hay que cargarlo del json
        al=load();
        if (!al) {
            //es la primera vez, no tengo datos almacenados, genero el JSON con los id y false
            //me recorro el array para generar el nuevo json
            Javiteca.getGeneros().then (
                function (data){

                    for (var i = 0; i < data.data.length; i++) {
                        var b = data.data[i].id;
                        //el dato se guarda en este formarto { id : true/false } asi accedo muy rapido y puedo cambiar los datos facilmente
                        generosFavoritos[b]='false';
                    }
                    save();
                }
            );
        } else
            generosFavoritos=al;
    } else {
        console.log("no soporta storage");
        generosFavoritos=null;
    }

    function save (){
        localStorage.setItem(Properties.localStrGenero, JSON.stringify(generosFavoritos));
    }

    function load(){
        var a = localStorage.getItem(Properties.localStrGenero);
        return JSON.parse(a);
    }

    return {

        cambiaFavorito: function(id) {
            //cambia el estado del favorito y despues devuelve el icono que tiene que mostrar
            if ( generosFavoritos[id] === 'true' ){
                generosFavoritos[id] = 'false';
            } else {
                generosFavoritos[id] = 'true';
            }
            save();
            return this.esFavorito(id);
        },

        esFavorito: function(id) {
            //compruba si es favorito o no, devuelve un icono y otro y es el que se muestra
           if ( generosFavoritos[id] === 'false')
                return Properties.noEsFavoritoIcon;
            else
                return Properties.esFavoritoIcon;

        }
    };
}]);