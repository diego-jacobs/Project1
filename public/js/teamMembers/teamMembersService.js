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
			return $http.get('http://localhost:61078/api/member')
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