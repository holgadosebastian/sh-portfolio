'use strict';

/**
 * @ngdoc function
 * @name shPortfolioApp.controller:AboutCtrl
 * @description
 * # BehanceSrv
 * Controller of the shPortfolioApp
 */
angular.module('shPortfolioApp')
  .constant('socialInfo', {
    'github' : {
      brand: 'Github',
      icon: 'fa-github',
      title: 'My open source projects',
      description: 'My public repositories',
      id: 'holgadosebastian',
      url: 'https://www.github.com/holgadosebastian'
    },
    'behance' : {
      brand: 'Behance',
      icon: 'fa-behance',
      title: 'My design portfolio',
      description: 'I keep my design portfolio here',
      id: 'sebastianholgado',
      url: 'https://www.behance.net/sebastianholgado'
    },
    'linkedin': {
      brand: 'Linked In',
      icon: 'fa-linkedin',
      title: 'My professional CV',
      description: 'My professional CV',
      id: 'holgadosebastian',
      url: 'https://www.linkedin.com/in/holgadosebastian'
    },
    'twitter': {
      brand: 'Twitter',
      icon: 'fa-twitter',
      title: 'My twitter feed',
      description: 'What I\'m talking about',
      id: 'holgado_seba',
      url: 'https://twitter.com/holgado_seba'
    },
    'soundcloud': {
      brand: 'Soundcloud',
      icon: 'fa-soundcloud',
      title: 'Souncloud favorites',
      description: 'Music that I like',
      id: 'holgado-sebastian',
      url: 'https://soundcloud.com/holgado-sebastian/likes'
    },
    'flickr': {
      brand: 'Flickr',
      icon: 'fa-flickr',
      title: 'Flickr camera roll',
      description: 'My photography slideshow',
      id: 'holgado.seba',
      url: 'https://www.flickr.com/photos/130476944@N06/'
    }
  });
