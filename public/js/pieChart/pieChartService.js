(function(){
	'use strict';

	angular
		.module('app')
		.factory('pieChartService', pieChartService);

	pieChartService.$inject = ['$http'];

	function pieChartService($http) {
		return {
			getGraphic: getGraphic
		};

		function getGraphic(){
			return $http.get('https://training-d6d75.firebaseio.com/mockups/pieChart.json')
	     		.then(getGraphicComplete)
	     		.catch(getGraphicFailed);
		}

		function getGraphicComplete(response){
			return response.data;
		}

		function getGraphicFailed(error){
			return error;
		}
	}
})();