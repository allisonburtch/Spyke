var Buffer  = require('buffer').Buffer,
    crypto  = require('crypto'),
    assert  = require('assert'),
    MaxUInt = 4294967295;


function _parseArgs(arg_array) {
   if (arg_array.length === 0) { throw new Error('Atleast a callback argument is required'); }
   var is_range = arg_array.length > 2;

   return {
      cb:  arg_array[arg_array.length-1],
      min: is_range ? arg_array[0] : undefined,
      max: is_range ? arg_array[1] : undefined
   };
}

/** Map random int to the range so that an even distrobution of results is possible
 *
 * Using this method ensures an even distrobution of as opposed to the modulo
 * technique is is biased.
 *
 * @see http://mathoverflow.net/questions/35556/skewing-the-distribution-of-random-values-over-a-range
 * for an explaination of the modulo issue.
 */
function _mapToRange(min, max, randUInt) {
   var result_range = max - min,
       factor = result_range / MaxUInt;

   return Math.round((randUInt * factor) + min); // Math.round may cause some slight issues.
}

/*** Returns a random unsigned Int ***
     Returns the random int returned by nodes crypto library
*/
exports.getRandomInt = function(min, max, callback) {
   var args = _parseArgs(arguments), unsigned_int, rand_int;

   crypto.randomBytes(8, function(err, bytes_slow_buf) {
      if (err) { return cb(err); }

      unsigned_int = Buffer(bytes_slow_buf).readUInt32LE(0);

      if (args.min !== undefined) {
         assert(args.max !== undefined && args.min < args.max);
         rand_int = _mapToRange(args.min, args.max, unsigned_int);
      }
      else {
         rand_int = unsigned_int;
      }

      args.cb(null, rand_int);
   });
};
