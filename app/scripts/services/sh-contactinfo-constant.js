'use strict';

/**
 * @ngdoc function
 * @name shPortfolioApp.controller:AboutCtrl
 * @description
 * # BehanceSrv
 * Controller of the shPortfolioApp
 */
angular.module('shPortfolioApp')
  .constant('contactInfo', {
    'phone' : {
      name: 'Phone number',
      value: '+54 221 153047535',
      icon: 'fa-phone'
    },
    'email': {
      name: 'E-mail',
      value: 'holgado.sebastian@gmail.com',
      icon: 'fa-envelope'
    },
    'skype': {
      name: 'Skype',
      value: 'holgado.sebastian',
      icon: 'fa-skype'
    }
  });
