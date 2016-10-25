(function(){
    'use strict';
   
    angular
        .module("app")
        .controller("DeleteController", DeleteController);

    DeleteController.$inject = ['$http', '$routeParams'];

    function DeleteController($http, $routeParams) {
        var vm = this;
        DeleteData();

        function DeleteData() {

            var data = $routeParams.id;

            $http({
               method: 'DELETE',
               url: 'http://localhost:61078/api/member?',
               data: data
               })
               .success(function (data) {
                   callback(data);
               })
               .error(function (data, status, headers, config) {
                   error(data, status, headers, config);
               })
               .finally(function () {
                   always();
               });

        };
    }
})();
