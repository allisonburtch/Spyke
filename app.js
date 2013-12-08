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

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '/views')));

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

    socket.emit('message', { message: 'welcome to the chat' });

    socket.on('event', function(data){});

	socket.on('peer', function (data) {
	    // io.sockets.emit('sendingPeer', data);
	    peerID = data;
	    console.log("this is a new peerid " + peerID);

	});

  	socket.on('disconnect', function(){});


	socket.on('error', function (data) {
		data = error;
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

