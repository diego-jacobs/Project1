(function(){
	'use strict';
	
	angular
		.module("app")
		.directive('appTotal', appTotal);

	function appTotal() { 
		var directive = { 
		    restrict: 'E', 
		    scope: { 
		      info: '=' 
		    }, 
		    templateUrl: 'js/total/appTotal.html',
			controller: 'TotalController',
		    controllerAs: 'controller',
		    bindToController: true 
		};
		
	  	return directive; 
	}
})();