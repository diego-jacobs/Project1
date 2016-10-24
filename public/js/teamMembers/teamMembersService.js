(function(){
	'use strict';

	angular
		.module('app')
		.factory('teamMembersService', teamMembersService);

	teamMembersService.$inject = ['$http'];

	function teamMembersService($http) {
		return {
			getMembers: getMembers
		};

		function getMembers(){
			return $http.get('https://training-d6d75.firebaseio.com/members/team.json')
	     		.then(getMembersComplete)
	     		.catch(getMembersFailed);
		}

		function getMembersComplete(response){
			return response.data;
		}

		function getMembersFailed(error){
			return error;
		}
	}
})();