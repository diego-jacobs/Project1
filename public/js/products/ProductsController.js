(function(){
	'use strict';
	angular
		.module('app')
		.controller('ProductsController', ProductsController);

	ProductsController.$inject = ['productsService'];

	function ProductsController(productsService) { 
		var vm = this;
		vm.products = [];

		activate();

		function activate() {
	        return getProducts().then();
	    }

	    function getProducts() {
	        return productsService.getProducts()
	            .then(function(data) {
	                vm.products = data;
	                return vm.products;
	            });
	    }
	}
})();
