'use strict';

/**
 * @ngdoc function
 * @name footInfoApp.controller:infoFoot
 * @description
 * # infoFoot
 * Controller of the footInfoApp
 */

angular.module('footInfoApp')
	.controller('LeagueEspagneCtrl', ['$rootScope', '$scope', 'LeagueEspagneServices',
		function($rootScope, $scope, LeagueEspagneServices){

	loadInfoLeagueEspagne();



  // Load league Espagne info
  function loadInfoLeagueEspagne(){
		LeagueEspagneServices.getInfo().then(function(response){
			$scope.infoLeagueEspagne = response.data.responseData.feed.entries;
		  console.log($scope.infoLeagueEspagne);
		})
	}




}]);
