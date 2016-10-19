(function(){
	'use strict';

	angular
		.module("app")
		.factory('totalService', totalService);

	totalService.$inject = ['$http'];

	function totalService($http) {
		return {
			getTotal: getTotal
		};

		function getTotal(){
			return $http.get('https://training-d6d75.firebaseio.com/total_amount_raised.json')
	     		.then(getTotalComplete)
	     		.catch(getTotalFailed);
		}

		function getTotalComplete(response){
			return response.data;
		}

		function getTotalFailed(error){
			return error;
		}
	}

})();