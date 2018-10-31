let w = $('#game').width();
let h = $('#game').height();

window.onload = () => {
    //start game button and other procedures.
    // WINDOW SETUP
    window.addEventListener('keydown', (e) => {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        }
    }, false);

    window.addEventListener('keydown', game.keyState);
    window.addEventListener('keyup', game.keyState);
}

