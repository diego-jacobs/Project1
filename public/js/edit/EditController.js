(function(){
	'use strict';

	angular
	.module('app')
	.controller('EditController', EditController); 

	EditController.$inject = ['teamMembersService', '$routeParams', '$http'];

	function EditController(teamMembersService, $routeParams, $http){
		var vm = this;
		vm.member = {};
		
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

    vm.UpdateData = function () {

        var data = {
            FirstName: vm.member.FirstName,
            LastName: vm.member.LastName,
            UserName: vm.member.UserName,
            Password: vm.member.Password,
            ConfirmPassword: vm.member.ConfirmPassword,
            Email: vm.member.Email,
            ReceiveEmails: vm.member.ReceiveEmails,
            Role: vm.member.Role,
            Invite: vm.member.Invite
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
