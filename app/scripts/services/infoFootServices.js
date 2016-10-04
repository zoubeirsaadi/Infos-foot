'use strict';
angular.module('footInfoApp')
   .factory('InfoFootServices' , ['urls', 'FeedService', function(urls, Feed){
   	var InfoFootRss = urls.INFO_FOOT_RSS;
   		var InfoFootServices = {};

   		// get feed info
   		InfoFootServices.getInfo = function(){
          return Feed.parseFeed(InfoFootRss);
   		};

   		return InfoFootServices;
   }])
