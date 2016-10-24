(function(){
	'use strict';

	angular
		.module('app')
		.factory('pendingMembersService', pendingMembersService);

	pendingMembersService.$inject = ['$http'];

	function pendingMembersService($http) {
		return {
			getMembers: getMembers
		};

		function getMembers(){
			return $http.get('https://training-d6d75.firebaseio.com/members/pending.json')
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