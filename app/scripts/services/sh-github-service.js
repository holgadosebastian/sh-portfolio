'use strict';

angular.module('shPortfolioApp')
  .service('GithubSrv', function ($http) {

	    this.getRepositories = function getRepositories() {
	    	var url = '/portfolio/github/repositories';
	      return $http.get( url );
	    };
      
	});
