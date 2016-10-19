(function(){
	'use strict';

	angular
		.module("app")
		.factory('messagesService', messagesService);

	messagesService.$inject = ['$http'];

	function messagesService($http) {
		return {
			getMessages: getMessages
		};

		function getMessages(){
			return $http.get('https://training-d6d75.firebaseio.com/messages.json')
				.then(getMessagesComplete)
				.catch(getMessagesFailed);
		}

		function getMessagesComplete(response){
			return response.data;
		}

		function getMessagesFailed(error){
			return error;
		}
	}
})();