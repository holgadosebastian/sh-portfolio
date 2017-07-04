'use strict';

angular.module('shPortfolioApp')
  .service('MailerSrv', function ($http) {
	    this.sendMessage = function sendMessage( message ) {
	    	var url = '/mailer/contact';

	      return $http(
          {
            method: 'post',
            url: url,
            data: {
                name: message.name,
                email: message.email,
                find: message.find,
                message: message.message
            }
          }
        );
	    };
	});
