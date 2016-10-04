'use strict';

/**
 * @ngdoc function
 * @name footInfoApp.controller:infoFoot
 * @description
 * # infoFoot
 * Controller of the footInfoApp
 */

angular.module('footInfoApp')
	.controller('DetailsCtrl', ['$rootScope', '$scope', 'DetailsServices', '$routeParams', '$sce',
		function($rootScope, $scope, DetailsServices, $routeParams, $sce){

	 //infoDetails();
$scope.infoDetailsLink = $sce.trustAsResourceUrl($routeParams.link);
//alert($routeParams.link);
  // Load info details
  function infoDetails(detailsLink){
    DetailsServices.getInfoDetails(detailsLink).then(function(response){
      $scope.infoDetails = response.data.responseData.feed.entries;
			console.log($scope.infoDetails);
    })
  }

}]);
