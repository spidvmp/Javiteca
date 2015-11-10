angular.module("javi").service("bandaStorage",["Properties","Javiteca",function(Properties, Javiteca){

    var bandasFavoritas={};
    //compruebo si puedo usar el localstorage
    if (typeof(Storage) !== "undefined") {
        //lo primeo es cargar lo que haya, en caso de que no haya, pues hay que cargarlo del json
        al=load();
        if (!al) {
            //es la primera vez, no tengo datos almacenados, genero el JSON con los id y false
            //me recorro el array para generar el nuevo json
            Javiteca.getBandas().then (
                function (data){

                    for (var i = 0; i < data.data.length; i++) {
                        var b = data.data[i].id;
                        //el dato se guarda en este formarto { id : true/false } asi accedo muy rapido y puedo cambiar los datos facilmente
                        bandasFavoritas[b]='false';
                    }
                    save();
                }
            );
        } else
            bandasFavoritas=al;
    } else {
        console.log("no soporta storage");
        bandasFavoritas=null;
    }

    function save (){
        localStorage.setItem(Properties.localStrBanda, JSON.stringify(bandasFavoritas));
    }

    function load(){
        var a = localStorage.getItem(Properties.localStrBanda);
        return JSON.parse(a);
    }

    return {

        cambiaFavorito: function(id) {
            //cambia el estado del favorito y despues devuelve el icono que tiene que mostrar
            if ( bandasFavoritas[id] === 'true' ){
                bandasFavoritas[id] = 'false';
            } else {
                bandasFavoritas[id] = 'true';
            }
            save();
            return this.esFavorito(id);
        },

        esFavorito: function(id) {
            //compruba si es favorito o no, devuelve un icono y otro y es el que se muestra
           if ( bandasFavoritas[id] === 'false')
                return Properties.noEsFavoritoIcon;
            else
                return Properties.esFavoritoIcon;

        }
    };
}]);