const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const togglePlay = () => {
  const method = video.paused ? "play" : "pause";

  video[method]();
};

const updateButton = () => {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
};

const skip = event => {
  const dataSkip = event.target.dataset.skip;
  video.currentTime += parseFloat(dataSkip);
};

const handleRangeUpdate = event => {
  const { name, value } = event.target;
  video[name] = value;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = event => {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", event => mousedown && scrub(event));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
