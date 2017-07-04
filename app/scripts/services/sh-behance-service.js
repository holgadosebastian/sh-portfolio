'use strict';

angular.module('shPortfolioApp')
  .service('BehanceSrv', function ($http) {
	    this.getPortfolio = function getPortfolio() {
	    	var url = '/portfolio/behance/projects';
	      return $http.get( url );
	    };

      this.getProject = function getProject ( aProjectId ) {
        var url = '/portfolio/behance/project/' + aProjectId;
        return $http.get( url );
      };
	});
