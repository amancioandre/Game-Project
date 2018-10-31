// Musics Array
const LEVEL_ARRAY = [
  { name: 'Charon', path: '../../Media/music/charon.mp3', mood: 'angry' },
  { name: 'Paragon', path: '../../Media/music/paragon.mp3', mood: 'exhiliration' },
  { name: 'Truth Inside', path: '../../Media/music/truth inside.mp3', mood: 'anxiety' },
]

// GAME FUNCTIONS

function checkPlatform(bars, player) {
  let i = parseInt((player.x) / 20 - 1);
  // console.log(i)

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