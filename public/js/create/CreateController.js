(function(){
    'use strict';
   
    angular
        .module("app")
        .controller("CreateController", CreateController);

    CreateController.$inject = ['$http'];

    function CreateController($http) {
        var vm = this;
        console.log(vm);
        var ServerResponse = '';
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };

        vm.InsertData = function () {

            var data = {
                FirstName: vm.FirstName,
                LastName: vm.LastName,
                UserName: vm.UserName,
                Password: vm.Password,
                Email: vm.Email
            };

             $http({
               method: 'POST',
               url: 'http://localhost:61078/api/member',
               data: data
               })
               .success(function (data) {
                   callback(data);
               })
               .error(function (data, status, headers, config) {
                   error(data, status, headers, config);
               })
               .finally(function () {always();
               });
               

        };
    }
})();