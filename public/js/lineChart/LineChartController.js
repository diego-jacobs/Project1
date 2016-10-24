(function(){
	'use strict';

	angular
	.module('app')
	.controller('LineChartController', LineChartController); 

	LineChartController.$inject = ['lineChartService'];

	function LineChartController(lineChartService){
		var vm = this;
		vm.graphic = [];

		
		activate();

		function activate() {
	        return getGraphic().then();
	    }

	    function getGraphic() {
	        return lineChartService.getGraphic()
	            .then(function(data) {
	                vm.graphic = data;
	                return vm.graphic;
	            });
	    }
	    console.log(vm);
    }

})();
