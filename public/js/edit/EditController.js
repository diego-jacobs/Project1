(function(){
	'use strict';

	angular
	.module('app')
	.controller('EditController', EditController); 

	EditController.$inject = ['teamMembersService', '$routeParams', '$http'];

	function EditController(teamMembersService, $routeParams, $http){
		var vm = this;
		vm.member = {};
		vm.UpdateData = UpdateData();
		
		activate();

		function activate() {
	        return getMembers().then();
	    }

	    function getMembers() {
	        return teamMembersService.getMembers()
	            .then(function(data) {
	                vm.member = data[$routeParams.id];
	                return vm.member;
	            });
	    }
	    console.log(vm);




        function UpdateData($http) {

            var data = {
                FirstName: vm.FirstName,
                LastName: vm.LastName,
                UserName: vm.UserName,
                Password: vm.Password,
                Email: vm.Email
            };

            $http({
               method: 'PUT',
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
