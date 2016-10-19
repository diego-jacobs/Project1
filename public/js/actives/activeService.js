(function(){
	'use strict';

	angular
		.module("app")
		.factory('activeService', activeService);

	activeService.$inject = ['$http'];

	function activeService($http) {
		return {
			getActives: getActives
		};

		function getActives(){
			return $http.get('https://training-d6d75.firebaseio.com/header/products.json')
	     		.then(getActivesComplete)
	     		.catch(getActivesFailed);
		}

		function getActivesComplete(response){
			return response.data;
		}

		function getActivesFailed(error){
			return error;
		}
	}
})();