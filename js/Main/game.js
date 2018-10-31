console.log('game.js loaded');

class Game {
  constructor(w, h, start_pos) {
    this.players = [];
    this.topology = new Topology(w, h, start_pos);
  }

  //PLAYERS
  plugPlayer(name1, name2) {
    this.players.push(new Player(name1));
    this.players.push(new Player(name2));
  }

  //CONTROLERS
  keyState(event) {
    let key_state = (event.type == "keydown") ? true : false;
    switch (event.keyCode) {
      //PLAYER ONE
      case 96:// spacebar key
        game.players[0].spacebar = key_state;
        break;
      case 37:// left key
        game.players[0].left = key_state;
        break;
      case 38:// up key
        game.players[0].up = key_state;
        break;
      case 39:// right key
        game.players[0].right = key_state;
        break;
      case 40:// down key
        game.players[0].down = key_state;
        break;

      //PLAYER TWO
      case 32:// spacebar key
        game.players[1].spacebar = key_state;
        break;
      case 65:// left key
        game.players[1].left = key_state;
        break;
      case 87:// up key
        game.players[1].up = key_state;
        break;
      case 68:// right key
        game.players[1].right = key_state;
        break;
      case 83:// down key
        game.players[1].down = key_state;
        break;
    }
  }

  //GAME FUNCTIONS
  checkPlatform(player) {
    let bars = this.topology.bars;
    let width = this.topology.width;
    let i = parseInt((player.x) / 20 - 1);
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

  //RENDERING
  showPlayers() {
    this.players.forEach((player,i) => {
      if(i === 0) {
        fill(255,0,0);
        player.render();
      } else {
        fill(0,255,0);
        player.render();
      }
    });
  }

  displayScore() {
    this.players.forEach(player => {
      player.score;
      player.name;
    })
  }
}