(function(){
    'use strict';
    
    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "views/home.html"
            })
            .when("/configurations", {
                templateUrl : "views/configurations.html"
            })
            .when("/edit/:id", {
                controller: 'EditController', 
                controllerAs: 'members',
                templateUrl : "views/edit.html"
            })  
            .otherwise({ 
                redirectTo: '/' 
            });
    }
})();