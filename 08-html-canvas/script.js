const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#bada55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 50;
context.globalCompositeOperation = "multiply";

let isDrawing = false,
  lastX = 0,
  lastY = 0,
  hue = 0,
  direction = true;

const draw = event => {
  if (!isDrawing) return;

  const { offsetX, offsetY } = event;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(offsetX, offsetY);
  context.stroke();
  [lastX, lastY] = [offsetX, offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? context.lineWidth++ : context.lineWidth--;
};

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mousedown", event => {
  isDrawing = true;

  const { offsetX, offsetY } = event;
  [lastX, lastY] = [offsetX, offsetY];
});
