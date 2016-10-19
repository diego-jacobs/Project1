(function(){
	'use strict';

	angular
		.module("app")
		.factory('companyService', companyService);

	companyService.$inject = ['$http'];

	function companyService($http) {
		return {
			getCompany: getCompany
		};

		function getCompany(){
			return $http.get('https://training-d6d75.firebaseio.com/company.json')
	     		.then(getCompanyComplete)
	     		.catch(getCompanyFailed);
		}

		function getCompanyComplete(response){
			return response.data;
		}

		function getCompanyFailed(error){
			return error;
		}
	}
})();