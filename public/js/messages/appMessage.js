(function(){
	'use strict';
	
	angular
		.module("app")
		.directive('appMessage', appMessage);

	function appMessage() { 
		var directive = { 
		    restrict: 'E', 
		    scope: { 
		      info: '=' 
		    }, 
		    templateUrl: 'js/messages/appMessage.html',
			controller: 'MessagesController',
		    controllerAs: 'messages',
		    bindToController: true 
		};
		
	  	return directive; 
	}
})();