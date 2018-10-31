window.addEventListener('keydown', (e) => {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

let w;
let h;
let song;
let player;
let amp;

let y;
let x = 0;
const frames = 0;



w = $('#game').width();
h = $('#game').height();

let topology = new Topology(w,h,0);

function preload() {
  
}

// function setup() {
//   const screen = createCanvas(w, h);
//   screen.parent('game');
//   player = new Player();
//   song = loadSound('../Media/music/truth inside.mp3', loaded);
//   amp = new p5.Amplitude();
//   frameRate(40);
// }

function setup() {

  const screen = createCanvas(w, h);
  screen.parent('game');

  topology.levelLoader(LEVEL_ARRAY);
}

function draw() {
  background(0);
  translate(0,h)
  fill(255);
  topology.backgroundRender();
  topology.renderBars();
}

// function draw() {
//   translate(w / 3 - player.x - 10, h - 50);
//   background(2, 0, 0);

//   if (amp.getLevel() !== 0) {
//     bars.push({
//       y: map(amp.getLevel(), 0, 0.5, 0, h),
//       x: (x += 20)
//     });
//   }


//   stroke(0);
//   fill(255);
//   beginShape();
//   bars.forEach((bar) => {
//     rect(bar.x, 20, 20, -bar.y);
//   });
//   endShape();

//   fill(255, 0, 0);
//   player.render();
//   player.move();
//   checkPlatform(bars, player);
// }

const bars = [
  // { x: 60, y: 20 },
  // { x: 80, y: 20 },
  // { x: 100, y: 20 },
  // { x: 120, y: 20 },
  // { x: 140, y: 20 },
  // { x: 160, y: 20 },
  // { x: 180, y: 20 },
  // { x: 200, y: 20 },
  // { x: 220, y: 20 },
  // // SECOND ROW
  // { x: 240, y: 40 },
  // { x: 260, y: 40 },
  // { x: 280, y: 60 },
  // { x: 300, y: 60 },
  // { x: 320, y: 40 },
  // { x: 340, y: 40 },
  // { x: 360, y: 60 },
  // { x: 380, y: 40 },
  // { x: 400, y: 40 },
];