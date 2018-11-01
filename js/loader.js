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
  let start = document.getElementById('start')
  let pause = document.getElementById('pause')


  start.addEventListener('click', startGame);
  pause.addEventListener('click', pauseGame)
};
