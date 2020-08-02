var ball;
var basket;
var score;

function preload() {
  ballIm = loadImage("Untitled.png");
}

 function setup() {
   
  createCanvas(800,400);
  ball = createSprite(100, 200, 50, 50);
  ball.addImage(ballIm);
  ball.scale = 0.5;
  basket = createSprite(790,30,40,300);
  basket.shapeColor="yellow";
}

function draw() {
  background("blue"); 
 // ball.velocityX=5;
  if(ball.x>800){
    ball.x=100;
  }
  if(keyDown(UP_ARROW)){
    ball.velocityY=-5;
  }
  if(keyDown(DOWN_ARROW)){
    ball.velocityY=5;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.velocityX=5;
  }
  if(keyDown(LEFT_ARROW)){
    ball.velocityX=-5;
  }
  if(ball.isTouching(basket)) {
    ball.visible = false;
    basket.visible = false;
    
  } 
  drawSprites();
}