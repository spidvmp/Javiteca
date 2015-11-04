angular.module("javi").service("GenresProvider",["$http", "Properties",
    function($http, Properties)
    {
        this.getGenres = function()
            {
                return $http.get(Properties.generos);
            };
    }]);