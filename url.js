var URLSafeBase64 = require('urlsafe-base64');

var randomURLSafeBase64;

crypto.randomBytes(32, function(err, buf) {
   if (err) {
    throw err;
    return;
   };
  randomURLSafeBase64 = URLSafeBase64.encode(buf);
});

console.log(randomURLSafeBase64);