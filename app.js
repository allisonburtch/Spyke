//dependencies
var routes = require('./routes');
var express = require('express');
var path = require('path');
var https = require('https');
var fs = require('fs');
var url = require('url');
var app = express(), 
    http = require('http'),
    server = http.createServer(app), 
    io = require('socket.io').listen(server);
var sockets = io;

// all environments
app.engine('.html', require('ejs').__express);
app.set('port', process.env.PORT || 5500);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.bodyParser());
// app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));


console.log(process.env.port);

app.configure('development', function(){
  app.use(express.errorHandler());
});

//creating the http/socket server
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


sockets.configure(function() {
  sockets.set('transports', ['xhr-polling']);
  sockets.set('polling duration', 10);
});

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/documentation', function(req, res){
  res.render('documentation');
});

//randomly generated url that gets the chatroom.html page
//newid is everything after /chatroom/ in the url
//this is where
app.get('/chatroom/:id', function(req, res){
	res.render('chatroom');
	newid = req.params.id;
	console.log("your new chatroom id is " + newid);
	});

sockets.on('connection', function (socket) {
	console.log("We have a new client: " + socket.id);
  
	socket.on('peer', function(data) {
		peerID = data.peer_id;
		chatRoomURL = data.chatroom;
	    console.log("this is the first peer id" + peerID);
		// We can save this in the socket object if we like
		console.log("url id:" + newid );

		console.log("chatroom id? :" + data.chatroom )

		console.log("peer id? " + peerID)
		
		for (var i  = 0; i < sockets.length; i++) {
			console.log("loop: " + i + " " + sockets[i].peer);
		}

		if (newid == data.chatroom)
		{
		
			socket.broadcast.emit('peer_id', data);
			console.log('data: ', data);
		}
	});

	socket.on('newPeer', function(data){
		newPeer = data;
		console.log("this is the second peer id " + newPeer);
		socket.broadcast.emit('newPeer', data);
		});

	socket.on('error', function (data) {
		error = data;
	    console.log("there's an error " + error);
		});

	socket.on('disconnect', function() {
        	console.log("Client has disconnected");
        });
});





//for heroku


//getting the main page with the 'create chatroom' putton
	// var chatRooms = new Object();
	//i think i might need to push to an array but who knows
		// chatRooms = {
	 //  	"chatRoomURL": chatRoomURL,
		//   	"peerID" : data.peer_id,
		//   };

		// for (var i = 0; i < chatRooms.length; i++){
		// 	chatRooms[i]['chatRoomURL']
		// 	if(chatRooms[i].chatRoomURL == newid){
		// 		push.chatRooms;
		// 	}
		// }

	
	// "peers": 
	//   	[
	//   	 "peerOne": peerID,
	//   	 "peerTwo": peer2,
	//   	 "peerThree": peer3,
	//   	 "peerFour": peer4
	//   	]
// });
