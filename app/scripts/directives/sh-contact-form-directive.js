'use strict';

angular.module('shPortfolioApp')
  .directive('contactForm', [
    '$http',
    '$timeout',
    'MailerSrv',
    function( $http, $timeout, MailerSrv ) {
      return {
        restrict: 'AE',
        link: function( scope ) {
          scope.form = {};
          scope.form.find = 'select';

          scope.status = {
            name: '',
            email: '',
            find: '',
            message: ''
          };

          scope.sentStatus = '';

          scope.validateName = function validateName() {
            if ( scope.form.name && scope.form.name.length > 0) {
              scope.status.name = 'ok';
            } else {
              scope.status.name = 'error';
            }
          };

          scope.validateEmail = function validateEmail() {
            var emailReg = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
            if (scope.form.email && emailReg.test(scope.form.email)) {
              scope.status.email = 'ok';
            } else {
              scope.status.email = 'error';
            }
          };

          scope.validateFind = function validateFind() {
            if ( scope.form.find && scope.form.find !== '' ) {
              scope.status.find = 'ok';
            } else {
              scope.status.find = '';
            }
          };

          scope.validateMessage = function validateMessage() {
            if ( scope.form.message && scope.form.message.length > 0) {
              scope.status.message = 'ok';
            } else {
              scope.status.message = 'error';
            }
          };

          scope.send = function send() {
            scope.validateName();
            scope.validateEmail();
            scope.validateMessage();
            if ( scope.status.name === 'ok' && scope.status.email === 'ok' && scope.status.message === 'ok') {
              scope.isSending = true;

              MailerSrv.sendMessage( scope.form )
      	  			.then( function onSuccess() {
                  _resetForm();
                  scope.sentStatus = 'success';
      	  			}, function onError( ) {
                  scope.sentStatus = 'error';
      	  			})
                .finally( function () {
                  scope.isSending = false;
                });
            } else {
              console.log('error');
            }
          };

          function _resetForm() {
            scope.form = {};
            scope.status = {
              name: '',
              email: '',
              message: ''
            };
          }
        },
        templateUrl: 'views/partials/sh-contact-form.html'
      };
    }
  ]);
