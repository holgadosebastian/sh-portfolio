'use strict';

angular.module('shPortfolioApp')
  .controller('ContactCtrl', [
    '$scope',
    '$rootScope',
    'contactInfo',
    'clipboard',
    function ($scope, $rootScope, contactInfo, clipboard) {
  		$scope.contact = {};

      $rootScope.pageTitle = 'Contact | Sebastián Holgado';
      $rootScope.currentPage = 'contact';
      $rootScope.pageDescription = 'Contact me through gmail, skype or using the contact form';

      $scope.contact.contactInfo = contactInfo;

      $scope.contact.copyToClipboard = function copyToClipboard( item ) {
        clipboard.copyText(item.value);
        item.copied = true;

        setTimeout( function() {
          item.copied = false;
          $scope.$apply();
        }, 1500);
      };
    }
  ]);
