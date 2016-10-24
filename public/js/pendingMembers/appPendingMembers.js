(function(){
	'use strict';
	
	angular
		.module('app')
		.directive('appPendingMembers', appPendingMembers);

	function appPendingMembers() { 
		var directive = { 
		    restrict: 'E', 
		    scope: { 
		      info: '=' 
		    }, 
		    templateUrl: 'js/pendingMembers/appPendingMembers.html',
			controller: 'PendingMembersController',
		    controllerAs: 'controller',
		    bindToController: true 
		};
		
	  	return directive; 
	}
})();