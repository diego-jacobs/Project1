(function(){
	'use strict';

	angular
		.module("app")
		.factory('graphicService', graphicService);

	graphicService.$inject = ['$http'];

	function graphicService($http) {
		return {
			getGraphics: getGraphics
		};

		function getGraphics(){
			return $http.get('https://training-d6d75.firebaseio.com/graphics.json')
				.then(getGraphicsComplete)
				.catch(getGraphicsFailed);
		}

		function getGraphicsComplete(response){
			return response.data;
		}

		function getGraphicsFailed(error){
			return error;
		}
	}
})();

