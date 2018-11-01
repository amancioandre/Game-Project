/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
console.log('player.js loaded');

class Player {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;

    this.spacebar = false;
    this.left = false;
    this.right = false;
    this.up = false;

    this.jumping = true;
    this.climb = false;
    this.boost = false;

    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 4;
    this.score = 0;
  }

  render() {
    rect(this.x, this.y, 20, -20);
  }

  update() {
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
    if (this.up && this.climb) {
      this.speedY -= 5;
    }
    if (this.spacebar && this.jumping === false) {
      this.speedY -= 40;
      this.jumping = true;
    } else if (this.y > 0) {
      this.jumping = false;
      this.y = 0;
      this.speedY = 0;
    }
  }

  checkPoints(music) {
    this.score = (music.duration() * 100 - music.currentTime).toFixed();
  }
}
