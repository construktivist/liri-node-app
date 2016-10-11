

//Twitter Start
//============================================================================================================================================================================================================================

var twitter = require("twitter");
var keys = require("./keys.js");
var twitterKeys = keys.twitterAuth;
var twitterQueryURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=KeeganKelly0&count=20";

var client = new twitter({
  consumer_key: keys.twitterAuth.consumer_key,
  consumer_secret: keys.twitterAuth.consumer_secret,
  access_token_key: keys.twitterAuth.access_token_key,
  access_token_secret: keys.twitterAuth.access_token_secret
});

function getMyTweets(){

	var twitterQueryURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=KeeganKelly0&count=20";

	client.get(twitterQueryURL, function(error, tweets, response) {
	   if(error) throw error;

	   for (var i = 0; i <  tweets.length; i++) {
			console.log("============================================================================================================================")
		   	console.log(" ");
		   	console.log(tweets[i].user.screen_name);
		   	console.log(tweets[i].user.location);
		   	console.log(tweets[i].text);
		   	console.log(" ");
		   	console.log("============================================================================================================================")   
		};

	});

};

//============================================================================================================================================================================================================================
//Twitter End

var command = process.argv[2];

 switch(command){
 	case "my-tweets":
 		getMyTweets();
 		break;

 	case "test1":
 		console.log("test");
 		break;
	
 	case "test2":
 		console.log("test");
 		break;

 	case "test3":
 		console.log("test");
 		break;

};