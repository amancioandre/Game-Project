function startGame(n) {
  if(n === 1) {
    game.plugPlayer();
  }
  if(n === 2) {
    game.plugPlayer();
    game.plugPlayer();
  }

  let menu = document.getElementById('menu');
  menu.setAttribute('style', 'display: none;');

  game.start = true;
  const load = setTimeout(() => {
    game.topology.level[0].music.play();
  }, 2000)
}

function pauseGame() {
  if (!game.pause) {
    noLoop();
    game.topology.level[0].music.pause();
    game.pause = !game.pause;
    pause.innerText = 'Unpause'
  } else {
    loop();
    game.topology.level[0].music.play();
    game.pause = !game.pause;
    pause.innerText = 'Pause'
  }
}

function resetGame() {
  // ????????????????????????
}

