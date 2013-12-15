Purpose
-------
Javascripts Math.random is not very random.  This library attempts to use the NodeJS crypto library to generate random numbers more randomly.  This has not been tested yet using an entropy validator but should be better then the normal randomness.

Install
-------
Since this module is not in NPM yet simply clone the repository and use it as you will

    git clone git@github.com:my8bird/nodejs-secure-random.git

Usage
-----
    var random = require('./random');

    // Just get random data to use as you wish
    random.getRandomInt(function(err, value) {
       // This value will be between 0 and MAX_INT where MAX_INT is a 32bit value
       console.log("Look ma I got some entropy", value);
       }
    );

    // Get a random int between to values
    random.getRandomInt(10, 100, function(err, value) {
       // The value will between 10-100
       console.log("Look ma I got some entropy", value);
       }
    );

