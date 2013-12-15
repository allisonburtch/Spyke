//dependencies
var routes = require('./routes');
var path = require('path');
var https = require('https');
var fs = require('fs');
var url = require('url');
var express = require('express'),
    app = express(), 
    http = require('http'),
    server = http.createServer(app), 
    io = require('socket.io');

// all environments
app.engine('.html', require('ejs').__express);
app.set('port', process.env.PORT || 3333);
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


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var sockets = io.listen(server);
console.log("server info " + sockets);

var chatRooms = new Object();

//for heroku
sockets.configure(function() {
  sockets.set('transports', ['xhr-polling']);
  sockets.set('polling duration', 10);
});


//creating the http/socket server
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


//getting the main page with the 'create chatroom' putton
app.get('/', function(req, res){
  res.render('index');
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

    // socket.emit('message', { message: 'welcome to the chat' });
    // socket.on('event', function(data){});

	socket.on('peer', function(data) {
		peerID = data.peer_id;
	    console.log("this is the first peer id" + peerID);
		// We can save this in the socket object if we like
		console.log("url id:" + newid )
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
		//send chatroom id,
		//receive chatroom
		// and send chatroom id
		// Tell everyone my peer_id
		
	});

	socket.on('newPeer', function(data){
		newPeer = data;
		console.log("this is the second peer id " + newPeer);
		socket.broadcast.emit('newPeer', data);
		});

  	socket.on('disconnect', function(){});

	socket.on('error', function (data) {
		error = data;
	    console.log("there's an error " + error);
	});
});


// 	chatRooms = {
// 	  	"chatRoomURL": chatRoomURL,
// 	  	"peers": 
// 	  	[
// 	  	 "peerOne": peerID,
// 	  	 "peerTwo": peer2,
// 	  	 "peerThree": peer3,
// 	  	 "peerFour": peer4
// 	  	]
// 	  };

// 	for (var i = 0; i < chatRooms.length; i++){
// 		chatRooms[i]['chatRoomURL']
// 		if(chatRooms[i].chatRoomURL == newid){
// 			push.chatRooms;
// 		}
// 	}

//  		socket.on('otherevent', function(data) {
// 			console.log("Received: 'otherevent' " + data);
//                 });

//         socket.on('disconnect', function() {
//         	console.log("Client has disconnected");
//         });
	
// });
// 	//push newid to an array
//  });


// // //separate socket.io from express stuff 

// app....
// socket..on

// push 
// //i 

// 	socket.on connections
// 	for socket connection, if newid == new



// });

//using sockets to tell people to open connections to eachother

// socket server in this room and has x peer id
// if people have same room id send eachother peer id 
//socket.io
//now associating 




 //  chatRooms.push(newChatroom);

// 	app.redirect("/chatRoom.html");
//   //https://github.com/karlward/cooperate-defect/blob/master/server/src/server.js

// }

// app.get('/chatRoom/:id', function(req, res){
// server will check req.params.id (which is what client 2 sned it) against current chatrooms that are alive
// it will then generate a peer id
// for loop of vc.chatrooms
// for (var i =0; i<vc.chatrooms.length; i++ ){
// 	if vc.chatrooms[i].chatRoomURL == req.params.id
// YOU GIVE CLIENT2 AN ID.
// add a new peer to that chatroom and then do al the peerjs stuff




// //and locally on the server you have two unique ids that have been generated
// //client 1 gets a peerid which is also the url/chatroomid
//  //1. is the chatroomiD which is the ur;
//  //2. is a peerId for client 1.
//  // and creat json object that 

