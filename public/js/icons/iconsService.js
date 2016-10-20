(function(){
	'use strict';

	angular
		.module("app")
		.factory('iconsService', iconsService);

	iconsService.$inject = ['$http'];

	function iconsService($http) {
		return {
			getIcons: getIcons
		};

		function getIcons(){
			return $http.get('https://training-d6d75.firebaseio.com/header/icons.json')
	     		.then(getIconsComplete)
	     		.catch(getIconsFailed);
		}

		function getIconsComplete(response){
			return response.data;
		}

		function getIconsFailed(error){
			return error;
		}
	}
})();