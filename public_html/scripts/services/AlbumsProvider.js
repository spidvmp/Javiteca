angular.module("javi").service("AlbumsProvider",["$http",
    function($http)
    {
        this.getAlbums = function() {
            return  $http.get("data/albums.json");
        };

        this.getTracks = function() {


        }
    }]);