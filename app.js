const video = document.getElementById("bg-video");

video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});
