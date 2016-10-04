'use strict';

angular.module('footInfoApp').factory('DetailsServices', ['urls', 'FeedService', function(urls, Feed){
		var DetailsServices = {};

		// add an employee
		DetailsServices.getInfoDetails = function(detailsLink){
        return Feed.parseFeed(detailsLink);
    };

		return DetailsServices;
}])
