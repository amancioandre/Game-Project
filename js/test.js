let song;
let sliderVolume;
let sliderRate;
let sliderPan;
let button;
let jumpButton;
let amp;
let volArray = [];
let frames = 0;

function setup(){
    createCanvas(1000,400);
    song = loadSound('./js/truth inside.mp3', () => {
        song.play();
    });
    button = createButton('play/pause')
    button.mousePressed(togglePlaying);
    jumpButton = createButton('jump');
    jumpButton.mousePressed(jumpSong);
    sliderVolume = createSlider(0, 1, 0.5, 0.01);
    sliderRate = createSlider(0, 3, 1, 0.01);
    sliderPan = createSlider(0, 1, 0.5, 0.01);
    amp = new p5.Amplitude();
}

function togglePlaying() {
    console.log(song.isPlaying())
    if(song.isPlaying()){
        song.pause();
    } else {
        song.play();
    }
}

function jumpSong(){
    // let len = song.duration();
    song.jump(random(song.duration()));

}

function draw(){
    frames += 1;
    background(0);
    frameRate(30);
    rect(20,20,amp.getLevel()*2000,20);
    
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());

    volArray.push(amp.getLevel());
    stroke(255)
    fill(255);
    beginShape();
    volArray.forEach((vol,i) => {
        let y = map(vol, 0, 0.5, 20, height);
        rect(i*2, height-20, 2, -y);
        
    })
    endShape();
    
    if(volArray.length > width){
        volArray.shift();
    }
}