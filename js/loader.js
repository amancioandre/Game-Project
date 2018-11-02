/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const w = $('#game').width();
const h = $('#game').height();

window.onload = () => {
  // start game button and other procedures.
  // WINDOW SETUP
  window.addEventListener('keydown', (e) => {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  }, false);

  window.addEventListener('keydown', game.keyState.bind(game));
  window.addEventListener('keyup', game.keyState.bind(game));

  //BUTTONS SETUP
    // NAV BUTTONS
  let onePlayer = document.getElementById('onePlayer')
  let twoPlayers = document.getElementById('twoPlayers')
  let pause = document.getElementById('pause')


  onePlayer.addEventListener('click', () => {
    startGame(1)
  });
  twoPlayers.addEventListener('click', () => {
    startGame(2)
  });
  pause.addEventListener('click', pauseGame)
};
