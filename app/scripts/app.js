'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # footInfoApp
 *
 * Main module of the application.
 */
angular
  .module('footInfoApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .constant('urls', {
       INFO_FOOT_RSS: 'http://www.matchendirect.fr/rss/info.xml',
       FRANCE_INFO_FOOT_RSS: 'http://www.matchendirect.fr/rss/foot-ligue-1-c16.xml',
       ESPAGNE_INFO_FOOT_RSS: 'http://www.matchendirect.fr/rss/foot-ligue-1-c16.xml'
     })
      .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'InfoFootCtrl',
            controllerAs: 'main'
          })
          .when('/leagueFrance', {
            templateUrl: 'views/leagueFrance.html',
            controller: 'LeagueFranceCtrl',
            controllerAs: 'leagueFrance'
          })
          .when('/leagueEspagne', {
            templateUrl: 'views/leagueEspagne.html',
            controller: 'LeagueEspagneCtrl',
            controllerAs: 'leagueEspagne'
          })
          .when('/details', {
            templateUrl: 'views/details.html',
            controller: 'DetailsCtrl',
            controllerAs: 'details'
          })
          .otherwise({
            redirectTo: '/'
          });
      }]).run(function($rootScope, $httpParamSerializer, $location) {
          $rootScope.infoDetails = function(detailsLink) {
              //$rootScope.detailsLink = detailsLink;
              var params = {"link" : detailsLink};
              var serializedParams = $httpParamSerializer(params);
              var url = "/#/details";
              if (serializedParams.length > 0) {
                  url += ((url.indexOf('?') === -1) ? '?' : '&') + serializedParams;
              }
               window.location = url;
            };
            $rootScope.getActiveMenuItem = function (path) {
              return ($location.path() === path) ? 'active' : '';
            }
      });
