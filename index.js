module.exports = function crossmash(ary, key, val) {
  var tmp = {}

  if (!Array.isArray(key) && !Array.isArray(val)) {
    ary.forEach(function (obj) {
      tmp[obj[key]] = obj[val];
    });
  }
  else {
    //make both key and val arrays
    key = [].concat(key);
    val = [].concat(val);

    ary.forEach(function (obj) {
      var k, v;

      for (var x = 0; x < key.length; x++) {
        k = key[x];

        if (obj.hasOwnProperty(k)) {
          break;
        }
      }

      for (x = 0; x < key.length; x++) {
        v = val[x];

        if (obj.hasOwnProperty(v)) {
          break;
        }
      }

      tmp[obj[k]] = obj[v];
    });
  }
  
  return tmp;
}
