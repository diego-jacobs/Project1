(function(){
	'use strict';
	angular
		.module('app')
		.controller('ActiveController', ActiveController);

	ActiveController.$inject = ['activeService'];

	function ActiveController(activeService) {
		var vm = this; 
		vm.actives = {};

		activate();

		function activate() {
	        return getActives().then();
	    }

	    function getActives() {
	        return activeService.getActives()
	            .then(function(data) {
	                vm.actives = data;
	                return vm.actives;
	            });
	    }
	}
})();



