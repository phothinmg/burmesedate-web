setInterval(function () {
  var dt = new Date();
  var dat = dt.toLocaleTimeString();
  document.getElementById("wt").innerHTML = dat;
}, 1000);
