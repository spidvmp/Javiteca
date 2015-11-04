angular.module("javi").service("AlbumsProvider",["$http", "Properties",
    function($http, Properties)
    {

        this.getAlbums = function() {
            return  $http.get("data/albums.json");
        };

        this.getTracks = function() {


        }
    }]);