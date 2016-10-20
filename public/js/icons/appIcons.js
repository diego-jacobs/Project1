(function(){
	'use strict';

	angular
		.module("app")
		.directive('appIcons', appIcons);

	function appIcons() { 
		var directive = { 
	    	restrict: 'E', 
	    	scope: { 
	      		info: '=' 
	    	}, 
	    	templateUrl: 'js/icons/appIcons.html',
	    	controller: 'IconsController',
	        controllerAs: 'controller',
	        bindToController: true
	  	}; 

	  	return directive;
	}	
})();
