(function(){
	'use strict';

	angular
		.module("app")
		.directive('appTitle', appTitle);

	function appTitle() { 
		var directive = { 
	    	restrict: 'E', 
	    	scope: { 
	      		info: '=' 
	    	}, 
	    	templateUrl: 'js/company/appTitle.html',
	    	controller: 'CompanyController',
	        controllerAs: 'company',
	        bindToController: true
	  	}; 

	  	return directive;
	}	
})();
