var socket = io();
var mainVideo = document.getElementById("main-video");
var secondaryVideo = document.getElementById("secondary-video");

socket.on('index', (check) => {
  // stop video
  secondaryVideo
  if (check) {
    secondaryVideo.style.display = "block";
    secondaryVideo.play();
    secondaryVideo.addEventListener("ended", function () {
      secondaryVideo.style.display = "none";
    });
  }
});