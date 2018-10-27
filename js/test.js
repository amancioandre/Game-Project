var song;

function preload(){
    song = loadSound('paragon.mp3')
}

function setup(){
    createCanvas(400,400)
    song.play();
}

function draw(){
    background(0);
    rect(20,20,20,20)
    fill(255);
}