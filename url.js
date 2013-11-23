var URLSafeBase64 = require('urlsafe-base64');

function randomPadName() 
        {
            var chars = "0123456789ABCDEFGHIJKLMNOPQRS-_=TUVWXYZabcdefghijklmnopqrstuvwxyz";
            var string_length = 20;
            var randomstring = '';
                for (var i = 0; i < string_length; i++) 
                {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum, rnum + 1);
                }
                return randomstring;
            

var url = "v/" + randomPadName();
console.log(randomPadName());
}