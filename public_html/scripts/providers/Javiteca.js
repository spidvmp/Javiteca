angular.module("javi").provider("Javiteca", function( ) {

    //vamos a guardar los valores de los json
    var albumes = "";
    var bandas = "";
    var generos = "";

    return {

        //definimos la parte de configuracion
        //definomos los camonos a los json
        setAlbum:  function(valor){ albumes = valor;},
        setBanda:  function(valor){ bandas  = valor;},
        setGenero: function(valor){ generos = valor;},


        //y ahora la parte de run, simepre es un $get
        $get: ["$http", function ($http) {
            return {

                //obtenemos los albumes
                getAlbumes: function () {
                    return $http.get(albumes);
                },

                getBandas: function () {
                    return $http.get(bandas);
                },

                getGeneros: function () {
                    return $http.get(generos);
                }
            };
        }]
    }
});
