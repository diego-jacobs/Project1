(function(){
	'use strict';

	angular
		.module("app")
		.factory('productsService', productsService);

	productsService.$inject = ['$http'];

	function productsService($http) {
		return {
			getProducts: getProducts
		};

		function getProducts(){
			return $http.get('https://training-d6d75.firebaseio.com/products.json')
	     		.then(getProductsComplete)
	     		.catch(getProductsFailed);
		}

		function getProductsComplete(response){
			return response.data;
		}

		function getProductsFailed(error){
			return error;
		}
	}
})();
