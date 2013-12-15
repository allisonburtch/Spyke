var random = require('./random'),
    fs = require('fs');

var iterations = 3000;

(function() {
var i, j=0,
    stream = fs.createWriteStream('lib_entropy.output', {flags: 'w'});

for (i=0; i<iterations; i++) {
   random.getRandomInt(function(err, value) {
      stream.write(''+value+'\n');

      if (++j === iterations) {
         stream.end();
      }
   });
}
}());

(function() {
var i, j=0,
    stream = fs.createWriteStream('js_entropy.output', {flags: 'w'});

for (i=0; i<iterations; i++) {
   stream.write(''+Math.floor(Math.random()*2000000000));
}

stream.end();
}());

