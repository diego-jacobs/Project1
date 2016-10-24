(function(){
	'use strict';

	angular
	.module('app')
	.controller('TeamMembersController', TeamMembersController); 

	TeamMembersController.$inject = ['teamMembersService'];

	function TeamMembersController(teamMembersService){
		var vm = this;
		vm.members = [];

		
		activate();

		function activate() {
	        return getMembers().then();
	    }

	    function getMembers() {
	        return teamMembersService.getMembers()
	            .then(function(data) {
	                vm.members = data;
	                return vm.members;
	            });
	    }
    }

})();
