angular.module("app").factory('products', ['$http', function($http) {
  return $http.get('https://training-d6d75.firebaseio.com/products.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
