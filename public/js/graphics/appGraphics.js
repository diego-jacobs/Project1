(function(){
	'use strict';

	angular
		.module("app")
		.directive('appGraphics', appGraphics);

	function appGraphics() { 
		var directive = { 
	    	restrict: 'E', 
	    	scope: { 
	      		info: '=' 
	    	}, 
	    	templateUrl: 'js/graphics/appGraphics.html',
	    	controller: 'GraphicsController',
	        controllerAs: 'graphic',
	        bindToController: true
	  	}; 

	  	return directive;
	}
})();
