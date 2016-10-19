(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('MessagesController',  MessagesController);

	MessagesController.$inject = ['messagesService'];

	function MessagesController(messagesService) {
		var vm = this; 
  		vm.messages = [];

  		activate();

		function activate() {
	        return getMessages().then();
	    }

	    function getMessages() {
	        return messagesService.getMessages()
	            .then(function(data) {
	                vm.messages = data;
	                return vm.messages;
	            });
	    }
	}
})();