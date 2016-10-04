'use strict';

/**
 * @ngdoc function
 * @name footInfoApp.controller:infoFoot
 * @description
 * # infoFoot
 * Controller of the footInfoApp
 */

angular.module('footInfoApp')
	.controller('LeagueFranceCtrl', ['$rootScope', '$scope', 'LeagueFranceServices',
		function($rootScope, $scope , LeagueFranceServices){

	loadInfoLeagueFrance();



	// Load league Francais info
  function loadInfoLeagueFrance(){
		LeagueFranceServices.getInfo().then(function(response){
			$scope.infoLeagueFrance = response.data.responseData.feed.entries;
		})
	}



}]);
