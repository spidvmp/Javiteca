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
        $get: ["$http", "$filter", function ($http, $filter) {
            return {

                //obtenemos los albumes
                getAlbumes: function () {
                    return $http.get(albumes);
                },
                
                //obtenemos las bandas
                getBandas: function () {
                    return $http.get(bandas);
                },

                //obtenemos los generos
                getGeneros: function () {
                    return $http.get(generos);
                },
                
                //obtenemos solo un album, el del id
                getAlbum: function(idAlbum){
                     return $http.get(albumes).then(
                        function(res){
                            return $filter('filter')(res.data,{id: idAlbum});
                        },
                        function(error){
                            alert("Error al recuperar el albmub ",idAlbum);
                        }
                    );
                },

                //obtenemos solo un banda, el del id
                getBanda: function(idBanda){
                    return $http.get(bandas).then(
                        function(res){
                            return $filter('filter')(res.data,{id: idBanda});
                        },
                        function(error){
                            alert("Error al recuperar el albmub ",idBanda);
                        }
                    );
                },

                //obtenemos solo un genero, el del id
                getGenero: function(idGenero){
                    return $http.get(generos).then(
                        function(res){
                            return $filter('filter')(res.data,{id: idGenero});
                        },
                        function(error){
                            alert("Error al recuperar el albmub ",idGenero);
                        }
                    );
                },

                getWikipediaLink: function getWikipediaLink(banda){
                    var
                        query = encodeURIComponent(banda);
                    return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
                },

                /*
                getYouTubeLink: function getYouTubeLink(bandName,trackName) {
                    var query = encodeURIComponent((bandName + " " + trackName).toLowerCase());
                    return "https://www.youtube.com/results?search_query=" + query;
                }
                */
            };
        }]
    }
});
