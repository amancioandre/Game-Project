window.onload = () => {
    let w = $('#game').width();
    let h = $('#game').height();
    
    function setup(){
        let screen = createCanvas(w, h)
        screen.parent('game');
    }
    
    function draw(){
        background(0);
    }
}
