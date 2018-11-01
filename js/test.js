/* eslint-disable no-undef */
const game = new Game(w, h, 0);

function setup() {
  // p5 SETUP INITS
  frameRate(30);
  const screen = createCanvas(w, h);
  screen.parent('game');

  game.topology.loader(LEVEL_ARRAY);
  game.plugPlayer('storm');
}

function draw() {
  background(0);
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
