/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable default-case */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
console.log('game.js loaded');

class Game {
  constructor(w, h, startPos) {
    this.players = [];
    this.topology = new Topology(w, h, startPos);

    this.loop = true;
  }

  // PLAYERS
  plugPlayer(name1, name2) {
    this.players.push(new Player(name1));
    this.players.push(new Player(name2));
  }

  // CONTROLERS
  keyState(event) {
    const players = this.players;
    const keyState = (event.type == 'keydown');
    switch (event.keyCode) {
      // PLAYER ONE
      case 96:// insert key
        players[0].spacebar = keyState;
        break;
      case 37:// left key
        players[0].left = keyState;
        break;
      case 38:// up key
        players[0].up = keyState;
        break;
      case 39:// right key
        players[0].right = keyState;
        break;
      case 40:// down key
        players[0].boost = keyState;
        break;

      // PLAYER TWO
      case 32:// spacebar key
        players[1].spacebar = keyState;
        break;
      case 65:// left key
        players[1].left = keyState;
        break;
      case 87:// up key
        players[1].up = keyState;
        break;
      case 68:// right key
        players[1].right = keyState;
        break;
      case 83:// down key
        players[1].boost = keyState;
        break;
    }
  }

  // GAME FUNCTIONS
  checkPlatform(player) {
    const bars = this.topology.bars;
    const width = this.topology.width;
    const i = parseInt((player.x) / 20 - 1);
    if (bars[i]) {
      if (bars[i - 1]) {
        if (width < bars[i - 1].y + player.y && player.x >= bars[i - 1].x + width) {
          player.x = bars[i].x + width;
          player.climb = true;
        }
      }
      if (player.x >= bars[i].x - width && player.x <= bars[i].x + width) {
        if (player.y > -bars[i].y) {
          player.jumping = false;
          player.climb = false;
          player.y = -bars[i].y;
          player.speedY = -player.gravity;
        }
      }
      if (bars[i + 1]) {
        if (width < bars[i + 1].y + player.y && player.x > bars[i + 1].x - width) {
          player.x = bars[i].x;
          player.climb = true;
        }
      }
    }
  }

  checkEnd() {
    const i = this.topology.bars.length;
    this.players.forEach((player) => {
      if (player.x >= this.topology.bars[i].x) { player.x = this.topology.bars[i].x; }
      // this.showFinalScene();
    });
  }

  // RENDERING
  showPlayers() {
    this.players.forEach((player, i) => {
      if (i === 0) {
        fill(255, 0, 0);
        player.render();
      } else {
        fill(0, 255, 0);
        player.render();
      }
    });
  }

  displayScore() {
    this.players.forEach((player) => {
      player.score;
      player.name;
    });
  }

  displayLevelElements() {
    // Final Flag
    const xF = this.topology.bars[this.topology.bars.length - 1].x;
    beginShape();
    fill(0, 0, 255);
    rect(xF, 0, 5, -300);
    vertex(xF + 5, -300);
    vertex(xF + random(40, 70), -270);
    vertex(xF + 5, -240);
    endShape();
  }
}
