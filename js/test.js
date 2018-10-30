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

w = $('#game').width();
h = $('#game').height();

function preload() {
  
}

function setup() {
  const screen = createCanvas(w, h);
  screen.parent('game');
  player = new Player();
  song = loadSound('../Media/music/truth inside.mp3');
  song.play();
  amp = new p5.Amplitude();
  frameRate(40);
}

function draw() {
  translate(w / 3 - player.x - 10, h - 50);
  background(0);

  if (amp.getLevel() !== 0) {
    bars.push({
      y: map(amp.getLevel(), 0, 1, 0, h),
      x: (x += 20)
    });
  }


  stroke(0);
  fill(255);
  bars.forEach((bar) => {
    rect(bar.x, 20, 20, -bar.y);
  });

  fill(255, 0, 0);
  player.render();
  player.move();
  checkPlatform(bars, player);
}

function checkPlatform(bars, player) {
  let i = parseInt((player.x) / 20 - 1);
  // console.log(i)

  if (bars[i]) {
    if (bars[i - 2]) {
      if (20 < bars[i - 1].y + player.y && player.x > bars[i - 2].x + 40) {
        player.x = bars[i].x;
      }
    }
    if (bars[i - 1]) {
      if (20 < bars[i - 1].y + player.y && player.x >= bars[i - 1].x + 20) {
        player.x = bars[i].x + 20;
      }
    }
    if (player.x >= bars[i].x - 20 && player.x <= bars[i].x + 20) {
      if (player.y > -bars[i].y) {
        player.jumping = false;
        player.y = -bars[i].y;
        player.speedY = -player.gravity;
      }
    }
    if (bars[i + 1]) {
      if (20 < bars[i + 1].y + player.y && player.x > bars[i + 1].x - 20) {
        player.x = bars[i].x;
      }
    }
  }
}

