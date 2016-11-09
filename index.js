var express = require('express');
var app = express();

var imdb = require('imdb-api');

var movie;
imdb.getReq({ name: 'The cyclone' }, function(err, things) {
    movie = things;
});

app.get('/', function (req, res) {
	var title = "<h1>"+movie["title"]+" ("+movie["year"]+")"+"</h1>"
	var year = "<h1>"+movie["year"]+"</h1>"
	var plot = "<p>"+movie["plot"]+"</p>"
    var img = "<img src='"+movie["poster"]+"'/>"
	res.send(title + plot + img);
});

// app.get('/', function (req, res) {
// 	var title = "<h1>"+movie["title"]+"</h1>"
// 	var plot = "<p>"+movie["plot"]+"</p>"
//     var img = "<img src='"+movie["poster"]+"'/>"
// 	res.send( title + plot + img);
// });


app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});