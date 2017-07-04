'use strict';

angular.module('shPortfolioApp')
  .filter('addDash', function () {
    return function ( input ) {
      if ( input && input.length > 1 ) {
        return input.join(' - ');
      } else if ( input ) {
        return input[0];
      }

      return '';
    };
  });
