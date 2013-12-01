//dependencies
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');
var https = require('https');
var fs = require('fs');
var url = require('url');
var express = require('express'),
    app = express(), 
    http = require('http'),
    server = http.createServer(app), 
    io = require('socket.io').listen(server);

var chatRooms = new Object();

// all environments
app.set('port', process.env.PORT || 3333);
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

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function(req, res){
  res.redirect('/index.html');
});

//
//start of questionable code
//
// app.get('/v\/(.*)/', function (req, res) {
// 	res.render('index.jade', {name: 'Joe'});
// });

app.post('/chatroom/:id', function(req, res){
    console.log(req.body.description_title);
    console.log(req.body.description_author);
    console.log(req.body.description_tags);
    console.log(req.body.description_textarea);
    console.log(req.files);
    res.send("Done!");
});



app.get('/chatroom/:id', function(req, res){
	req.params.id


// });
// function randomVidName() 
//     {
//         var chars = "0123456789ABCDEFGHIJKLMNOPQRS-_=TUVWXYZabcdefghijklmnopqrstuvwxyz";
//         var string_length = 20;
//         var randomstring = '';
//             for (var i = 0; i < string_length; i++) 
//             {
//                 var rnum = Math.floor(Math.random() * chars.length);
//                 randomstring += chars.substring(rnum, rnum + 1);
//             }
//             return randomstring;
// }
// app.post('/makeChatroom/:id', function(req, res){
// // you generate a chatroom which is a 20 char code.
// //res.redirect('/chatroom.html')

// //and locally on the server you have two unique ids that have been generated
// //client 1 gets a peerid which is also the url/chatroomid
//  //1. is the chatroomiD which is the ur;
//  //2. is a peerId for client 1.
//  // and creat json object that 

//  var newUrl = randomVidName();
//  // for cooperate-defect package globals
//   // set some defaults
//   var newChatRoom = {
//   	"chatRoomURL": newUrl,
//   	"peerId": [
//   	//starts with client 1s Id
//   	 "peerOne": //this is the peer id for client 1
//   	 code to generate another random random id 
//   	 peerTwo, etc
//   	]
//   }

//   chatRooms.push(newChatroom);

// 	app.redirect("/chatRoom.html");
//   //https://github.com/karlward/cooperate-defect/blob/master/server/src/server.js

// }

// app.get('/chatRoom/:id', function(req, res){
// // server will check req.params.id (which is what client 2 sned it) against current chatrooms that are alive
// //it will then generate a peer id
// //for loop of vc.chatrooms
// //for (var i =0; i<vc.chatrooms.length; i++ ){
// //	if vc.chatrooms[i].chatRoomURL == req.params.id
// //YOU GIVE CLIENT2 AN ID.
// // add a new peer to that chatroom and then do al the peerjs stuff

// //}
//
// }

// app.listen(3333);

