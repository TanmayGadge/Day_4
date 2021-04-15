var player, hurdle, brick;
var bgImg, hurdleImg, brickImg, playerRightAnimation, playerLeftAnimation;
var playerSteady, playerSteadyLeft;
var ground, hurdle2, hurdle3;
var coin;


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

  playerSteadyLeft = loadAnimation("Images/Character/R-L/charaterSprite12-removebg-preview.png",
  "Images/Character/R-L/charaterSprite12-removebg-preview.png",
  "Images/Character/R-L/charaterSprite12-removebg-preview.png",
  "Images/Character/R-L/charaterSprite12-removebg-preview.png");
}


function setup() {
  createCanvas(1200, 850);

  player = createSprite(300, 740);
  player.addAnimation("Steady", playerSteady);
  player.addAnimation("Running Right", playerRightAnimation);
  player.addAnimation("Running Left", playerLeftAnimation);
  player.addAnimation("Steady Left", playerSteadyLeft);
  player.scale = 0.5;


  hurdle = new Hurdle(400, 715);
  hurdle2 = new Hurdle(800, 715);
  brick = new Brick(450, 600);

  player.depth = hurdle.body.depth;
  player.depth = brick.body.depth;
  player.depth += 1;

  ground = createSprite(600, 760, 2000, 10);
  ground.x = ground.width / 2;
  ground.visible = false;

  // hurdle.body.debug = true;
  // player.debug = true;
  // brick.body.debug = true;


  player.setCollider("rectangle", 0, 0, player.width - 10, player.height - 50);

}

function draw() {
  background(bgImg);


  player.collide(brick.body);
  player.collide(hurdle.body);
  player.collide(ground);

  ground.width += 200;

  if (keyWentDown(RIGHT_ARROW)) {
    player.velocityX = 5;
    player.velocityY = 0;
    player.changeAnimation("Running Right", playerRightAnimation);
  }

  if (keyWentUp(RIGHT_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 0;
    player.changeAnimation("Steady", playerSteady);
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.velocityX = -5;
    player.velocityY = 0;
    player.changeAnimation("Running Left", playerLeftAnimation);
  }
  if (keyWentUp(LEFT_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 0;
    player.changeAnimation("Steady Left", playerSteadyLeft);
  }

  if (keyWentDown(UP_ARROW)) {
    player.velocityX = 0;
    player.velocityY = -5;
  }

  
  player.velocityY += 0.25;

 
  drawSprites();
}