module.exports = function crossmash(ary, key, val) {
  var tmp = {}

  ary.forEach(function (obj) {
    tmp[obj[key]] = obj[val];
  });

  return tmp;
}
