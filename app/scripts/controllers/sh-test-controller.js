'use strict';

/**
 * @ngdoc function
 * @name shPortfolioApp.controller:MainCtrl
 * @description
 * # TestCtrl
 * Controller of the shPortfolioApp
 */
angular.module('shPortfolioApp')
  .controller('TestCtrl', [
  	'$scope',
  	function ($scope) {
	  	$scope.test = {};

	    $scope.test.stuff = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
  	}
  ]);
