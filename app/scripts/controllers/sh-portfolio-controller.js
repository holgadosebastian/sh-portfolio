'use strict';

angular.module('shPortfolioApp')
  .controller('PortfolioCtrl', [
  	'$scope',
  	'$rootScope',
  	'BehanceSrv',
    'GithubSrv',
  	function ($scope, $rootScope, BehanceSrv, GithubSrv) {
  		$scope.portfolio = {};
      $scope.github = {};

      $rootScope.pageTitle = 'Portfolio | Sebastián Holgado';
      $rootScope.currentPage = 'portfolio';
      $rootScope.pageDescription = 'My development and design portfolio. Responsive web development, single page applications and more';

  		$scope.portfolio.loading = false;
      $scope.portfolio.page = 1;
      $scope.portfolio.pageSize = 6;
      $scope.portfolio.projects = null;
      $scope.portfolio.currentProject = null;

      $scope.github.projects = null;

  		$scope.portfolio.doSearch = function doSearch() {
	  		$scope.portfolio.loading = true;

	  		BehanceSrv.getPortfolio()
	  			.then( function onSuccess(response) {
	  				$scope.portfolio.projects = response.data.projects;
	  				$scope.portfolio.loading = false;
            if ( $scope.portfolio.projects && $scope.portfolio.projects.length > 0) {
              console.log('Success');
              $scope.portfolio.error = false;
            } else {
              console.log('Could not fetch Behance Projects ::Too Many Requests');
              $scope.portfolio.error = true;
            }
	  			}, function onError( ) {
	  				$scope.portfolio.loading = false;
	  				$scope.portfolio.error = true;
	  			});

  	  	GithubSrv.getRepositories()
	  			.then( function onSuccess(response) {
            $scope.github.repositories = response.data;
	  			}, function onError( ) {
	  			});
  		};

      $scope.portfolio.openProject = function openProject( aProject ) {
        $scope.portfolio.loading = true;

        BehanceSrv.getProject( aProject.id )
        .then( function onSuccess( response ) {
          $scope.portfolio.currentProject = response.data.project;
          $scope.portfolio.showPortfolioItem = true;
          $rootScope.lockScroll.desktop = true;
        }, function onError( ) {
        }).
        finally( function () {
          $scope.portfolio.loading = false;
        });
      };

  		// Loads projects on page load
  		$scope.portfolio.doSearch();

      $scope.portfolio.nextPage = function nextPage() {
        $scope.portfolio.page+=1;
      };
	  }
  ]);
