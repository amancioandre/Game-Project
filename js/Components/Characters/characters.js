//class Character {} ??

function head(player){
    rect(player.x, player.y, 20, 20);
    noFill();
    stroke(255);
}

function body(player){
    rect(player.x, player.y, -20, -20);
    noFill();
    stroke(255);
}

function leftArm(player)