(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('GraphicsController', GraphicsController);

	GraphicsController.$inject = ['graphicService'];

	function GraphicsController(graphicService) { 
		var vm = this;
		vm.images = [];


		activate();

		function activate() {
	        return getGraphics().then();
	    }

	    function getGraphics() {
	        return graphicService.getGraphics()
	            .then(function(data) {
	                vm.images = data;
	                return vm.images;
	            });
	    }
	}

})();

