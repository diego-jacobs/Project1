(function(){
	'use strict';

	angular
	.module('app')
	.controller('PieChartController', PieChartController); 

	PieChartController.$inject = ['pieChartService'];

	function PieChartController(pieChartService){
		var vm = this;
		vm.graphic = [];

		
		activate();

		function activate() {
	        return getGraphic().then();
	    }

	    function getGraphic() {
	        return pieChartService.getGraphic()
	            .then(function(data) {
	                vm.graphic = data;
	                return vm.graphic;
	            });
	    }
	    console.log(vm);
    }

})();
