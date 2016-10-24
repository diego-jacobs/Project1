(function(){
	'use strict';

	angular
	.module('app')
	.controller('EditController', EditController); 

	EditController.$inject = ['teamMembersService', '$routeParams'];

	function EditController(teamMembersService, $routeParams){
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
    }
})();
