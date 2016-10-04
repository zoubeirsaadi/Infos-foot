'use strict';

angular.module('footInfoApp').factory('LeagueEspagneServices', ['urls', 'FeedService', function(urls, Feed){
 var InfoLeagueEspagneRss = urls.ESPAGNE_INFO_FOOT_RSS;
	 var LeagueEspagneServices = {};

	 // add an employee
	 LeagueEspagneServices.getInfo = function(){
       return Feed.parseFeed(InfoLeagueEspagneRss);
   };

	 return LeagueEspagneServices;
}])
