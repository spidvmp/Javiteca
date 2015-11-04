angular.module("javi").service("BandsProvider",["$http","Properties",
    function($http,Properties)
    {
        this.getBands = function()
            {
                return $http.get(Properties.bandas);
            };
    }]);