function startBackgroundMusic() {
  var audio = document.getElementById("backgroundMusic");
  if (audio.paused) {
    audio.play();
  }
}