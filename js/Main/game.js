console.log('game.js loaded');

class Game {
  constructor() {
    this.players = [];
    this.topology = new Topology(LEVEL_ARRAY);
  }

  //PLAYERS
  plugPlayer(name) {
    this.players.push(new Player(name));
  }

  //CONTROLERS
  keyState(event) {
    let key_state = (event.type == "keydown") ? true : false;
    switch (event.keyCode) {
      case 37:// left key
        player.left = key_state;
        break;
      case 32:// spacebar key
        player.spacebar = key_state;
        break;
      case 39:// right key
        player.right = key_state;
        break;
      case 38:// up key
        player.up = key_state;
        break;
      case 40:// down key
        player.down = key_state;
        break;
    }
  }

  //GAME FUNCTIONS
  checkPlatform(bars, player) {
    let i = parseInt((player.x) / 20 - 1);  
    if (bars[i]) {
      if (bars[i - 1]) {
        if (20 < bars[i - 1].y + player.y && player.x >= bars[i - 1].x + 20) {
          player.x = bars[i].x + 20;
          player.climb = true;
        }
      }
      if (player.x >= bars[i].x - 20 && player.x <= bars[i].x + 20) {
        if (player.y > -bars[i].y) {
          player.jumping = false;
          player.climb = false;
          player.y = -bars[i].y;
          player.speedY = -player.gravity;
        }
      }
      if (bars[i + 1]) {
        if (20 < bars[i + 1].y + player.y && player.x > bars[i + 1].x - 20) {
          player.x = bars[i].x;
          player.climb = true;
        }
      }
    }
  }

  displayScore() {
    this.players.forEach(player => {
      player.score;
    })
  }
}