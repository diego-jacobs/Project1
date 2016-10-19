(function(){
	'use strict';

	angular
		.module('app')
		.controller('TotalController', TotalController);

	TotalController.$inject = ['totalService'];

	function TotalController(totalService) { 
  		var vm = this; 
		vm.raised = {};

		activate();

		function activate() {
	        return getTotal().then();
	    }

	    function getTotal() {
	        return totalService.getTotal()
	            .then(function(data) {
	                vm.raised = data;
	                return vm.raised;
	            });
	    }
	}
})();