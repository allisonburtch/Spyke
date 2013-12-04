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

var chatRooms = new Object();

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

//for heroku
sockets.configure(function() {
  sockets.set('transports', ['xhr-polling']);
  sockets.set('polling duration', 10);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function(req, res){
  res.render('index');
});

app.get('/chatroom/:id', function(req, res){
	res.render('chatroom');
	newid = req.params.id;
	console.log(newid);
	//push newid to an array
});

//using sockets to tell people to open connections to eachother

// socket server in this room and has x peer id
// if people have same room id send eachother peer id 
//socket.io
//now associating 

// app.post('/chatroom/:id', function(req, res){
//     console.log(req.params.id);
//     // console.log(req.body.description_author);
//     // console.log(req.body.description_tags);
//     // console.log(req.body.description_textarea);
//     // console.log(req.files);
//     // res.send("Done!");
// });

//start of questionable code
//
// app.get('/v\/(.*)/', function (req, res) {
// 	res.render('index.jade', {name: 'Joe'});
// });


// app.post('/makeChatroom/:id', function(req, res){

// you generate a chatroom which is a 20 char code.
// res.redirect('/chatroom.html')

// //and locally on the server you have two unique ids that have been generated
// //client 1 gets a peerid which is also the url/chatroomid
//  //1. is the chatroomiD which is the ur;
//  //2. is a peerId for client 1.
//  // and creat json object that 

 // var newUrl = randomVidName();
 // // for cooperate-defect package globals
 //  // set some defaults
 //  var newChatRoom = {
 //  	"chatRoomURL": newUrl,
 //  	 "peerOne": 
 //  	 "peerTwo":
 //  	 "peerThree":
 //  	 "peerFour":
 //  	]
 //  }	

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

// }

// }

// app.listen(3333);

