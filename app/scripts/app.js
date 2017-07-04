'use strict';

/**
 * @ngdoc overview
 * @name shPortfolioApp
 * @description
 * # shPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('shPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'shFramework',
    'angular-clipboard'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/sh-about-view.html',
        controller: 'AboutCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/sh-portfolio-view.html',
        controller: 'PortfolioCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/sh-contact-view.html',
        controller: 'ContactCtrl'
      })
      .when('/test', {
        templateUrl: 'views/sh-test-view.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('');
  })
  .run( function( $rootScope ) {
      $rootScope.pageTitle = 'Sebastián Holgado - Front End Developer';
      $rootScope.currentPage = 'about';
      $rootScope.pageDescription = 'Front End Developer with strong focus on UI development and design';
  });
