

//Twitter Start
//============================================================================================================================================================================================================================

var twitter = require("twitter");
var keys = require("./keys.js");
var twitterKeys = keys.twitterAuth;

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

//Spotify Start
//============================================================================================================================================================================================================================
function spotifySong(){
	 var spotify = require('spotify');

	 var songArray = process.argv;
	 songArray.splice(0, 3);
	 var songName = songArray.join(" ");
	 
	 spotify.search({ type: 'track', query: songName}, function(err, data) {
	     if ( err ) {
	         console.log('Error occurred: ' + err);
	         return;
	     }

	     var song = data.tracks.items[0].name;
	     var album = data.tracks.items[0].album.name;
	     var artist = data.tracks.items[0].artists[0].name;
	     var previewURL = data.tracks.items[0].preview_url;

	     console.log("=======================================")
	     console.log(" ")
	     console.log("Song: " + song);
	     console.log("Artist: " + artist);
	     console.log("Album: " + album);
	     console.log("Preview URL: " + previewURL);
	     console.log(" ")
	     console.log("=======================================")

	 });

};

//============================================================================================================================================================================================================================
//Spotify End

//OMDB Start
//============================================================================================================================================================================================================================
function getMovie(){
	var request = require('request');

	var movieArray = process.argv;
	 movieArray.splice(0, 3);
	 var movieName = movieArray.join(" ");

	request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json", function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    var movie = JSON.parse(body);
	  }

		console.log("=======================================")
	    console.log(" ")
	    console.log("Title: " + movie.Title);
	    console.log("Year Released: " + movie.Released );
	    console.log("IMDB Rating: " + movie.imdbRating);
		console.log("Country: " + movie.Country);
		console.log("Language: " + movie.Language);
		console.log("Plot: " + movie.Plot);
		console.log("Actors:  " + movie.Actors);
		console.log("Rotten Tomatoes Rating: " + JSON.parse(body)['tomatoUserRating']);
        console.log("Rotten Tomatoes URL: " + JSON.parse(body)['tomatoURL']);						
	    console.log(" ")
	    console.log("=======================================")

	});

};

//============================================================================================================================================================================================================================
//OMDB End

//RANDOM Start
//============================================================================================================================================================================================================================
var fs = require("fs");

 function random(){
	fs.readFile("random.txt", "utf8", function (err, data){
  		if (err) throw err;
  			var dataArray = data.split(",")
  			var command = dataArray[0];
  			var thisThing = dataArray[1];
  			process.argv = [];
  			process.argv.push(0)
  			process.argv.push(0)
  			process.argv.push(command);
  			process.argv.push(thisThing);

  			var command = process.argv[2];

			switch(command){
			 	case "my-tweets":
			 		getMyTweets();
			 		break;

			 	case "spotify-this-song":
			 		spotifySong();
			 		break;
				
			 	case "movie-this":
			 		getMovie();
			 		break;

			 	case "do-what-it-says":
			 		random();
			 		break;
			};

		});
	};

//============================================================================================================================================================================================================================
//RANDOM End

var command = process.argv[2];

 switch(command){
 	case "my-tweets":
 		getMyTweets();
 		break;

 	case "spotify-this-song":
 		spotifySong();
 		break;
	
 	case "movie-this":
 		getMovie();
 		break;

 	case "do-what-it-says":
 		random();
 		break;

};