onmessage = function (e) {
  for (var i = 0; i <= e.data[0]; i += 1) {
    var j = i;
  }
  postMessage(j);
}