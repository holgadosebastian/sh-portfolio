'use strict';

angular.module('shFramework')
  .directive('shModal', [
    '$rootScope',
    function( $rootScope ) {
      return {
        restrict: 'AE',
        scope: {
          showOn: '=',
          mainText: '@',
          subText: '@'
        },
        link: function( scope, elem, attrs ) {
          scope.backgroundColor = attrs.backgroundColor;
          scope.close = function close() {
            scope.showOn = false;
            $rootScope.lockScroll = {
              desktop: false,
              tablet: false,
              mobile: false
            };
          };
        },
        templateUrl: 'views/partials/sh-modal.html',
        transclude: true
      };
    }
  ]);
