angular.module("app").directive('appProducts', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appProducts.html' 
  }; 
});