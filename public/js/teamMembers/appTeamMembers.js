(function(){
	'use strict';
	
	angular
		.module('app')
		.directive('appTeamMembers', appTeamMembers);

	function appTeamMembers() { 
		var directive = { 
		    restrict: 'E', 
		    scope: { 
		      info: '=' 
		    }, 
		    templateUrl: 'js/teamMembers/appTeamMembers.html',
			controller: 'TeamMembersController',
		    controllerAs: 'controller',
		    bindToController: true 
		};
		
	  	return directive; 
	}
})();