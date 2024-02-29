var socket = io();
var mainVideo = document.getElementById("main-video");
var secondaryVideo = document.getElementById("secondary-video");
var footageVideo = document.getElementById("footage-video");

function playSecondaryVideo() {
  secondaryVideo.style.display = "block";
  secondaryVideo.play();
  secondaryVideo.addEventListener("ended", function () {
    secondaryVideo.style.display = "none";
  });
}

socket.on('index', (check) => {
  // stop video
  secondaryVideo
  if (check) {
    playSecondaryVideo();
  }
});


const chkbutton = () => {
    secondaryVideo.style.display = "block";
    secondaryVideo.play();
    secondaryVideo.addEventListener("ended", () => {
        // footageVideo.style.display = "block";
        // footageVideo.play();
        secondaryVideo.style.display = "none";
    });
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 13) {
    chkbutton();
  }
}, true);