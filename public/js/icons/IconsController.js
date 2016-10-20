(function(){
	'use strict';
	angular
		.module('app')
		.controller('IconsController', IconsController);

	IconsController.$inject = ['iconsService'];

	function IconsController(iconsService) {
		var vm = this; 
		vm.icons = {};

		activate();

		function activate() {
	        return getIcons().then();
	    }

	    function getIcons() {
	        return iconsService.getIcons()
	            .then(function(data) {
	                vm.icons = data;
	                return vm.icons;
	            });
	    }
	}
})();



