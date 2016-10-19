(function(){
	'use strict';

	angular
		.module("app")
		.directive('appActives', appActives);

	function appActives() { 
		var directive = { 
	    	restrict: 'E', 
	    	scope: { 
	      		info: '=' 
	    	}, 
	    	templateUrl: 'js/actives/appActives.html',
	    	controller: 'ActiveController',
	        controllerAs: 'controller',
	        bindToController: true
	  	}; 

	  	return directive;
	}	
})();
