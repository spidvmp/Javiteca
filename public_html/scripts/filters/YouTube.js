angular.module("javi").filter("getYouTubeLink", function() {
    //los filtro siempre devuelven funciones y un mdato de entrada como minimo
    return function(banda, track){
        var query = encodeURIComponent((banda + " " + track).toLowerCase());
        return "https://www.youtube.com/results?search_query=" + query;
    }
});