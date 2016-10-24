(function(){
	'use strict';

	angular
	.module('app')
	.controller('PendingMembersController', PendingMembersController); 

	PendingMembersController.$inject = ['pendingMembersService'];

	function PendingMembersController(pendingMembersService){
		var vm = this;
		vm.members = [];

		
		activate();

		function activate() {
	        return getMembers().then();
	    }

	    function getMembers() {
	        return pendingMembersService.getMembers()
	            .then(function(data) {
	                vm.members = data;
	                return vm.members;
	            });
	    }
    }

})();
