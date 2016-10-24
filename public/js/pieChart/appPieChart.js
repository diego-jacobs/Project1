(function(){
	'use strict';
	
	angular
		.module('app')
		.directive('appPieChart', appPieChart);

	function appPieChart() { 
		var directive = { 
		    restrict: 'E', 
		    scope: { 
		      info: '=' 
		    }, 
		    templateUrl: 'js/pieChart/appPieChart.html',
			controller: 'PieChartController',
		    controllerAs: 'controller',
		    bindToController: true 
		};
		
	  	return directive; 
	}
})();