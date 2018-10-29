console.log('game.js loaded');

window.addEventListener('keydown', keyState);
window.addEventListener('keyup', keyState);

// (e) => {

  // if (e.key === 'ArrowRight') {
  //   // console.log('right');
  //   player.left = false;
  //   player.right = true;
  // }
  // if (e.key === 'ArrowLeft') {
  //   player.left = true;
  //   player.right = false;
  // }
  // if (e.key === 'ArrowUp') {
  //   console.log('up');
  // }
  // if (e.key === 'ArrowDown') {
  //   console.log('down');
  // }
  // if (e.key === ' ') {
  //   console.log(player.jumping)
  //   player.jumping = true;
  // }
// };

// document.onkeyup = (e) => {
//   if (e.key === 'ArrowRight') {
//     // console.log('right');
//     player.left = false;
//     player.right = false;
//   }
//   if (e.key === 'ArrowLeft') {
//     player.left = false;
//     player.right = false;
//   }
//   if (e.key === 'ArrowUp') {
//     console.log('up');
//   }
//   if (e.key === 'ArrowDown') {
//     console.log('down');
//   }
//   if (e.key === ' ') {
//   }
// };


function keyState(event) {

  let key_state = (event.type == "keydown")?true:false;

  switch(event.keyCode) {

    case 37:// left key
      player.left = key_state;
    break;
    case 32:// spacebar key
      player.spacebar = key_state;
    break;
    case 39:// right key
      player.right = key_state;
    break;

  }

}
