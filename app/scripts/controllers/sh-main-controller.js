'use strict';

angular.module('shPortfolioApp')
  .controller('MainCtrl', [
    '$scope',
    '$rootScope',
    '$window',
    'socialInfo',
    function ($scope, $rootScope, $window, socialInfo) {
    	$scope.main = {};

      $rootScope.pageTitle = 'Sebastián Holgado - Front End Developer';

      $scope.main.socialInfo = socialInfo;
      
      $rootScope.lockScroll = {
        desktop: false,
        tablet: false,
        mobile: false
      };

    	$scope.main.goTo = function goTo( url ) {
    		$window.open( url, '_blank');
    	};

    }
  ]);
