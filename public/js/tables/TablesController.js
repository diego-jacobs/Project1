(function(){
  'use strict';
  angular
    .module('app')
    .controller('TablesController', TablesController);

    TablesController.$inject = ['tablesService'];

    function TablesController(tablesService) {
      var vm = this;
      vm.tables = [];

      activate();

      function activate() {
        return getTables().then();
      }

      function getTables() {
        return tablesService.getTables()
          .then(function(data) {
            vm.tables = data;
            return vm.tables;
          });
      } 
      
      console.log(vm);
    }
})();