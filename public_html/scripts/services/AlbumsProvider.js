angular.module("jevi").service("BandsProvider",
    function($http)
    {
        this.getBands
            =
            function()
            {
                return
                $http.get("data/albums.json");
            };
    });