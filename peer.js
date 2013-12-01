//do i need forever so these will always run?

var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = new PeerServer({
  port: 9000,
  ssl: {
    key: fs.readFileSync('keys/server.key'),
    certificate: fs.readFileSync('keys/server.crt')
  }
});