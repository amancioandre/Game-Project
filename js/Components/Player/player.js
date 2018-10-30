console.log('player.js loaded');

class Player {
  constructor(name, _gender) {
    this.name = name;
    this.x = 0;
    this.y = h - 100;

    this.spacebar = false;
    this.jumping = true;
    this.left = false;
    this.right = false;

    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 4;
    this.score = 0;

    // this.character = new Character(gender);
  }

  render() {
    rect(this.x, this.y, 20, 20);
  }

  // ###################### BUILD MODULE ############################


  // ###################### MOTION FUNCTIONS ########################

  boost() {
    // if down arrow near wall, boost the other player jump
  }

  climb() {
    // how to grip and climb a wall? hold y position while something?

    // if up arrow near wall, then climb
  }

  move() {
    // FISICS
    this.speedY += this.gravity; // gravity

    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY *= 0.8; // damping
    this.speedX *= 0.8; // damping

    // DIRECTIONS
    if (this.right) {
      this.speedX += 3;
    }
    if (this.left) {
      this.speedX -= 3;
    }
    if (this.spacebar && this.jumping === false) {
      this.speedY -= 80;
      this.jumping = true;
    } else if(this.y > 0) {
      this.jumping = false;
      this.y = 0;
      this.speedY = 0;
    }
  }
}
