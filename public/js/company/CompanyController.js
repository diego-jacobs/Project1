(function(){
	'use strict';
	angular
		.module('app')
		.controller('CompanyController', CompanyController);

	CompanyController.$inject = ['companyService'];

	function CompanyController(companyService) {
		var vm = this; 
		vm.title = {};

		activate();

		function activate() {
	        return getCompany().then();
	    }

	    function getCompany() {
	        return companyService.getCompany()
	            .then(function(data) {
	                vm.title = data;
	                return vm.title;
	            });
	    }
	}
})();



