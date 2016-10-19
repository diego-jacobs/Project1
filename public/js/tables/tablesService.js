(function(){
	'use strict';

	angular
		.module("app")
		.factory('tablesService', tablesService);

	tablesService.$inject = ['$http'];

	function tablesService($http) {
		return {
			getTables: getTables
		};

		function getTables(){
			return $http.get('https://training-d6d75.firebaseio.com/tables.json')
	     		.then(getTablesComplete)
	     		.catch(getTablesFailed);
		}

		function getTablesComplete(response){
			return response.data;
		}

		function getTablesFailed(error){
			return error;
		}
	}

})();
