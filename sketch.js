
let paddleW=60;
let paddleH=15;
let paddleX;
let paddleY;
let brickW=50;
let brickH=40;

var score;


bricks=[];

function setup() { 
  createCanvas(400, 400);
  //create a ball
  ball=new Ball();  
  for(var _x = 0; _x < width / brickW; _x++) {
  	for(var _y = 0; _y < (height / 2) / brickH; _y++) {
      bricks[_x] = bricks[_x] || [];
      bricks[_x][_y] = new Brick(_x, _y, brickW, brickH);
  	}
  }
}



function draw() { 

   background(0,90);
   textSize(30);
   fill("pink");
 
   drawPaddle();
  
  //create the bouncing ball
   ball.display();
   ball.move();
   ball.bounce()
  
  // drawBrick();
  for(var _x = 0; _x < width / brickW; _x++) {
  	for(var _y = 0; _y < (height / 2) / brickH; _y++) {
      
      if (dist(ball.x, ball.y, bricks[_x][_y].x, bricks[_x][_y].y) < 40) {
		bricks[_x][_y].show = false;
		score = score+3;
		
		ball.dobounce();
		
		
      }
      bricks[_x][_y].display();
      

  	}
  }
     // for (i=0;i<bricks.length;i++){
   // bricks[i].display();
   // }
  
  
	//Game Over if the ball doesn't hit paddle
  if (ball.y>height){
  	gameOver();
   }
   text("Score:", score, 300, 400);

   drawSprite();
}

function drawPaddle(){
  paddleX=mouseX;
  paddleY=height-paddleH;
  fill(255,150,9);
  noStroke();
  rect(paddleX,paddleY,paddleW,paddleH);
}


function drawBrick(){
   for (x=0;x<width;x=x+50){
     for (y=0;y<width/2;y=y+40){
       stroke(255);
       strokeWeight(6);
       
       fill(255,random(100,250),random(0,100));
     	 rect(x,y,brickW,brickH);
     }
	}
}
  
function gameOver(){
		background(0);
  	textSize(32);
  	textAlign(CENTER);
  	fill(255,80,80);
  	text("GAME OVER",width/2,height/2);
	}

// function mousePressed() {
//   draw();
// }



