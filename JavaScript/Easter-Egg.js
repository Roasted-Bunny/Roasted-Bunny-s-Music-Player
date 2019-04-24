var i = "off";
var x = document.getElementById("Easter-Egg");

function playSongs() {
  if (i == "off") {
    x.play();
    i = "on";
  } else {
    x.pause();
    i = "off";
  }
}
