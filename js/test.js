/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let game;
let screen;

function setup() {
  // p5 SETUP INITS
  game = new Game(w, h, 0);
  screen = createCanvas(w, h);
  screen.parent('game');
  frameRate(30);
  game.topology.loader(LEVEL_ARRAY);
}

function draw() {
  background(0);
  if (game.start) {
    translate(-game.players[0].x + w / 3, h - 100);
    fill(255);

    game.topology.backgroundRender();
    game.topology.renderBars();

    game.players.forEach((player) => {
      player.update();
    });

    game.showPlayers();
    if (game.players.length > 1) {
      game.checkPlatform(game.players[0]);
      game.checkPlatform(game.players[1]);
    } else {
      game.checkPlatform(game.players[0]);
    }
  }
}