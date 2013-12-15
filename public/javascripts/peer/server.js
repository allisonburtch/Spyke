// var server = new PeerServer({ port: 9000 });

// var PeerServer = require('peer').PeerServer;
// var server = new PeerServer({ port: 9000 });


//do i need forever so these will always run?

var fs = require('fs');
// var PeerServer = require('peer').PeerServer;
var PeerServer = require('./').PeerServer;

var server = new PeerServer({
  port: 9000,
  ssl: {
    key: fs.readFileSync(__dirname + './keys/server.key'),
    certificate: fs.readFileSync(__dirname + './keys/server.crt')
  }
});

console.log(server.status)


