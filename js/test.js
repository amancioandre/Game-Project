window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);

let w;
let h;
let player;
let gravity = 5;


w = $('#game').width();
h = $('#game').height();

function setup() {
  const screen = createCanvas(w, h);
  screen.parent('game');
  player = new Player();
}

function draw() {
  background(0);
  fill(255);
  player.render(gravity);
}
