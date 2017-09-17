'use strict';

/**
 * @ngdoc overview
 * @name klick2linksApp
 * @description
 * # klick2linksApp
 *
 * Main module of the application.
 */
angular
  .module('klick2linksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$locationProvider','$routeProvider',function ($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);
