function resize() {
  const container = document.querySelector("#root");
  const c = document.querySelector("canvas");
  c.width = container.clientWidth;
  c.height = container.clientHeight;
}

resize();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const w = canvas.width;
const h = canvas.height;


// BEGIN YOUR CODE

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(107, 100, 20, 0, Math.PI*2);
  ctx.stroke();


}

// END YOUR CODE

setInterval(draw, 1000/30);