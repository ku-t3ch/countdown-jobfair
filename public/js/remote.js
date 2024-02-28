
var socket = io.connect();

const chkbutton = () => {
  var getTapLogo = document.getElementById("tapLogo");
  var getDone = document.getElementById("done");

  getTapLogo.style.display = "none";
  getDone.innerHTML = "Done!";
  socket.emit('index', true);
}
