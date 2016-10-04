'use strict';

angular.module('footInfoApp').factory('LeagueFranceServices', ['urls', 'FeedService', function(urls, Feed){
 var InfoLeagueFranceRss = urls.FRANCE_INFO_FOOT_RSS;
	 var LeagueFranceServices = {};

	 // add an employee
	 LeagueFranceServices.getInfo = function(){
       return Feed.parseFeed(InfoLeagueFranceRss);
   };

	 return LeagueFranceServices;
}])
