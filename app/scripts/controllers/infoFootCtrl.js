'use strict';

/**
 * @ngdoc function
 * @name footInfoApp.controller:infoFoot
 * @description
 * # infoFoot
 * Controller of the footInfoApp
 */

angular.module('footInfoApp')
	.controller('InfoFootCtrl', ['$rootScope', '$scope', 'InfoFootServices',
		function($rootScope, $scope , InfoFootServices){

	loadInfoFoot();


  // Load info foot
  function loadInfoFoot(){
		InfoFootServices.getInfo().then(function(response){
			$scope.infoFoot = response.data.responseData.feed.entries;
			console.log($scope.infoFoot);
		})
	}

}]);
