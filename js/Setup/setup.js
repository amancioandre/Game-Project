console.log('setup.js loaded')

// Musics Array
const LEVEL_ARRAY = [
  { name: 'Charon', path: './../../Media/music/charon.mp3', mood: 'angry' },
  { name: 'Paragon', path: '../../Media/music/paragon.mp3', mood: 'exhiliration' },
  { name: 'Truth Inside', path: '../../Media/music/truth inside.mp3', mood: 'anxiety' },
]

// WINDOW SETUP
window.addEventListener('keydown', (e) => {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);