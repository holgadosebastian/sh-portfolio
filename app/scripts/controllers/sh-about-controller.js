'use strict';

angular.module('shPortfolioApp')
  .controller('AboutCtrl', [
    '$scope',
    '$rootScope',
    'BehanceSrv',
    function ($scope, $rootScope, BehanceSrv) {
      $scope.about = {};

      $rootScope.pageTitle = 'Sebastián Holgado - Front End Developer';
      $rootScope.currentPage = 'about';
      $rootScope.pageDescription = 'Front End Developer with strong focus on UI development and design';

      $scope.about.projects = [];

      $scope.about.doSearch = function doSearch() {

        BehanceSrv.getPortfolio()
          .then( function onSuccess(response) {
            $scope.about.projects = response.data.projects;
            if ( $scope.about.projects && $scope.about.projects.length > 0) {
              console.log('Success');
              $scope.about.projectsError = false;
            } else {
              console.log('Could not fetch Behance Projects ::Too Many Requests');
              $scope.about.projectsError = true;
            }
          }, function onError( ) {
            $scope.about.projectsError = true;
          });
      };

      // Loads projects on page load
  		$scope.about.doSearch();

    }
  ]);
