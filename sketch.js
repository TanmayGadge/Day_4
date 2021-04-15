var player, hurdle, brick; 
var bgImg, hurdleImg, brickImg, playerRightAnimation, playerLeftAnimation;
var playerSteady;

function preload() {
  bgImg = loadImage("Images/background2.png");
  hurdleImg = loadImage("Images/hurdle-removebg-preview.png");
  brickImg = loadImage("Images/bricks.png");
  
  playerRightAnimation = loadAnimation("Images/Character/L-R/characterSprite1-removebg-preview.png",
  "Images/Character/L-R/characterSprite2-removebg-preview.png",
  "Images/Character/L-R/characterSprite3-removebg-preview.png",
  "Images/Character/L-R/characterSprite4-removebg-preview.png",
  "Images/Character/L-R/charaterSprite5-removebg-preview.png",
  "Images/Character/L-R/charaterSprite6-removebg-preview.png",
  "Images/Character/L-R/charaterSprite7-removebg-preview.png",
  "Images/Character/L-R/charaterSprite8-removebg-preview.png");

  playerLeftAnimation = loadAnimation("Images/Character/R-L/charaterSprite9-removebg-preview.png",
  "Images/Character/R-L/charaterSprite10-removebg-preview.png",
  "Images/Character/R-L/charaterSprite11-removebg-preview.png",
  "Images/Character/R-L/charaterSprite12-removebg-preview.png",
  "Images/Character/R-L/charaterSprite13-removebg-preview.png",
  "Images/Character/R-L/charaterSprite14-removebg-preview.png",
  "Images/Character/R-L/charaterSprite15-removebg-preview.png",
  "Images/Character/R-L/charaterSprite16-removebg-preview.png");

  playerSteady = loadAnimation("Images/Character/L-R/characterSprite1-removebg-preview.png",
  "Images/Character/L-R/characterSprite1-removebg-preview.png",
  "Images/Character/L-R/characterSprite1-removebg-preview.png",
  "Images/Character/L-R/characterSprite1-removebg-preview.png");
}


function setup() {
  createCanvas(3000, 850);

  player = createSprite(300, 750);
  player.addAnimation("Steady", playerSteady);
  player.scale = 0.5;
  hurdle = new Hurdle(400, 715);
  brick = new Brick(450, 600);

}

function draw() {
  background(bgImg);

  // if (keyDown(RIGHT_ARROW)){
  //   player.velocityX = 5;
  //   player.velocityY = 0;
  //   player.addAnimation("Running Right", playerRightAnimation);
  // }
  if (keyDown(LEFT_ARROW)){
    player.velocityX = -5;
    player.velocityY = 0;
    player.addAnimation("Running Left", playerLeftAnimation);
  }

  drawSprites();
}