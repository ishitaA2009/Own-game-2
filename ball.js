class Ball{
    constructor(){
        this.x = random(paddleX, paddleX + paddleW);
  this.y = random(width/2, width-paddleH);
  this.r = 12;
  this.speedx = 4;
  this.speedy = 3.5;
  this.active = true;
  }
  display(){
  fill(255);
  noStroke();
  ellipse(this.x, this.y, this.r, this.r);
  }
  move(){
  this.x = this.x-this.speedx;
  this.y = this.y-this.speedy;
  }
  bounce(){
  if (this.x<=0 || this.x >=width){
  this.speedx=this.speedx*(-1)
  }
  if (this.y<width/2 ||(this.y>=(width-paddleH)&&this.x>paddleX && this.x<(paddleX+paddleW))){
  this.speedy = this.speedy*(-1);
  }
}
  dobounce() {
  this.speedy = this.speedy*(-1);

  }
}
