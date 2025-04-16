const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function () {
  if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
    this.velX = -this.velX;
  }

  if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

Ball.prototype.collisionDetect = function () {
  for (const otherBall of balls) {
    if (this !== otherBall) {
      const dx = this.x - otherBall.x;
      const dy = this.y - otherBall.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + otherBall.size) {
        const angle = Math.atan2(dy, dx);
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const pos0 = { x: 0, y: 0 }; 
        const pos1 = {
          x: dx * cos + dy * sin,
          y: dy * cos - dx * sin,
        };

        const vel0 = {
          x: this.velX * cos + this.velY * sin,
          y: this.velY * cos - this.velX * sin,
        };
        const vel1 = {
          x: otherBall.velX * cos + otherBall.velY * sin,
          y: otherBall.velY * cos - otherBall.velX * sin,
        };

        const vxTotal = vel0.x - vel1.x;
        vel0.x = vel1.x;
        vel1.x = vel0.x + vxTotal;

        const absV = Math.abs(vel0.x) + Math.abs(vel1.x);
        const overlap = (this.size + otherBall.size) - Math.abs(pos0.x - pos1.x);
        pos0.x += (vel0.x / absV) * overlap;
        pos1.x += (vel1.x / absV) * overlap;

        const x0 = pos0.x * cos - pos0.y * sin;
        const y0 = pos0.y * cos + pos0.x * sin;
        const x1 = pos1.x * cos - pos1.y * sin;
        const y1 = pos1.y * cos + pos1.x * sin;

        otherBall.x = this.x + x1;
        otherBall.y = this.y + y1;
        this.x = this.x + x0;
        this.y = this.y + y0;

        this.velX = vel0.x * cos - vel0.y * sin;
        this.velY = vel0.y * cos + vel0.x * sin;
        otherBall.velX = vel1.x * cos - vel1.y * sin;
        otherBall.velY = vel1.y * cos + vel1.x * sin;
      }
    }
  }
};

let balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`,
    size
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();