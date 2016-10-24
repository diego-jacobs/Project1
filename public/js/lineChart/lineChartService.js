(function(){
	'use strict';

	angular
		.module('app')
		.factory('lineChartService', lineChartService);

	lineChartService.$inject = ['$http'];

	function lineChartService($http) {
		return {
			getGraphic: getGraphic
		};

		function getGraphic(){
			return $http.get('https://training-d6d75.firebaseio.com/mockups/lineChart.json')
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