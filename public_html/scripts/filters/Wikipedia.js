angular.module("javi").filter("wikipediaLink", function() {
    //los filtro siempre devuelven funciones y un mdato de entrada como minimo
    return function(banda){
        query = encodeURIComponent(banda);
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
    }
});