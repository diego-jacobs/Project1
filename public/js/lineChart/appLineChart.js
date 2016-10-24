(function(){
	'use strict';
	
	angular
		.module('app')
		.directive('appLineChart', appLineChart);

	function appLineChart() { 
		var directive = { 
		    restrict: 'E', 
		    scope: { 
		      info: '=' 
		    }, 
		    templateUrl: 'js/lineChart/appLineChart.html',
			controller: 'LineChartController',
		    controllerAs: 'controller',
		    bindToController: true 
		};
		
	  	return directive; 
	}
})();