console.log('player.js loaded');

class Player {
  constructor(name, gender) {
    this.name = name;
    this.x = 0;
    this.y = 0;

    this.spacebar = false;
    this.jumping = true;
    this.left = false;
    this.right = false;

    this.speedX = 0;
    this.speedY = 0;
    this.score = 0;

    // this.character = new Character(gender);
  }

  render() {
    // Render to the sketch
    translate(0, h - 50);
    rect(this.x, this.y, 20, 20, 5);
    this.move();
  }

  // ###################### BUILD MODULE ############################


  // ###################### MOTION FUNCTIONS ########################
  jump() {
    //
  }

  boost() {
    // if down arrow near wall, boost the other player jump
  }

  climb() {
    // how to grip and climb a wall? hold y position while something?

    // if up arrow near wall, then climb
  }

  move() {
    // FISICS
    this.speedY += 2; // gravity

    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY *= 0.8; // damping
    this.speedX *= 0.6; // damping


    if (this.right) {
      this.speedX += 4;
    }
    if (this.left) {
      this.speedX -= 4;
    }

    if (this.spacebar && this.jumping === false) {
      this.speedY -= 50;
      this.jumping = true;
    } else if (this.y > 20) {
      this.jumping = false;
      this.y = 20;
      this.speedY = 0;
    }
  }

  groundCollision() {
    
  }

  }
}
