angular.module("javi").service("BandsProvider",["$http",
    function($http)
    {
        this.getBands = function()
            {
                return $http.get("data/bands.json");
            };
    }]);