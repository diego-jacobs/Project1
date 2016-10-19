(function(){
	'use strict';

	angular
		.module("app")
		.directive('appProducts', appProducts);

	function appProducts() { 
		var directive = { 
	    	restrict: 'E', 
	    	scope: { 
	      		info: '=' 
	    	}, 
	    	templateUrl: 'js/products/appProducts.html',
	    	controller: 'ProductsController',
	        controllerAs: 'controller',
	        bindToController: true
	  	}; 

	  	return directive;
	}	
})();