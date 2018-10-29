window.addEventListener('keydown', (e) => {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);

let w;
let h;
let song;
let player;
let amp;

let y;
let frames = 0;

let vol = [
  {x: 60, y: 20},
  {x: 80, y: 20},
  {x: 100, y: 20},
  {x: 120, y: 20},
  {x: 140, y: 20},
  {x: 160, y: 20},
  {x: 180, y: 20},
  {x: 200, y: 20},
  {x: 220, y: 20},
  // SECOND ROW
  {x: 240, y: 40},
  {x: 260, y: 40},
  {x: 280, y: 60},
  {x: 300, y: 60},
  {x: 320, y: 40},
  {x: 340, y: 40},
  {x: 360, y: 60},
  {x: 380, y: 40},
  {x: 400, y: 40},
];

w = $('#game').width();
h = $('#game').height();

// function preload() {
//   song = loadSound('../Media/music/truth inside.mp3');
// }

function setup() {
  const screen = createCanvas(w, h);
  screen.parent('game');
  player = new Player();
  // song.play();
  // amp = new p5.Amplitude();
  frameRate(40);
}

function draw() {
  translate(0, h - 50);
  background(0);

  // if(amp.getLevel() !== 0){
  //   vol.push({
  //     y: map(amp.getLevel(), 0, 1, 0, h),
  //     x: (20*frameCount)});
  // }

  push();

  stroke(0)
  fill(255);
  vol.forEach(v => {;
    rect(v.x, 20, 20, -v.y);
  });

  pop();
  push();
  fill(255, 0, 0);
  player.render();
  pop();
  player.move();
  player.jump(vol);
}
