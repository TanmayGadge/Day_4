var player, hurdle, brick;
var bgImg, hurdleImg, brickImg, playerRightAnimation, playerLeftAnimation;

var playerSteady, playerSteadyLeft;
var bombAnimation, bombImg, bomb, bomb2;

var ground, hurdle2, hurdle3, hurdle4, hurdle5, hurdle6, hurdle7, hurdle8, hurdle9, hurdle10, hurdle11, hurdle12, hurdle13, hurdle14;
var brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13, brick14;
var brick15, brick16, brick17, brick18, brick19, brick20;

var baseValue;
var coinAnimation;

var coin, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, cooin11, coin12, coin13, coin14;
var coin15, coin16, coin17;
var coinCount;
var gameOverImg, gameOver;


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

  coinAnimation = loadAnimation("Images/Coins/coin1.png", "Images/Coins/coin2.png", "Images/Coins/coin3.png",
    "Images/Coins/coin4.png", "Images/Coins/coin5.png", "Images/Coins/coin6.png");

  bombAnimation = loadAnimation("Images/Bombs/bomb1.png", "Images/Bombs/bomb2.png", "Images/Bombs/bomb3.png",
    "Images/Bombs/bomb4.png", "Images/Bombs/bomb5.png", "Images/Bombs/bomb6.png");

  bombImg = loadImage("Images/bombSprite.png");

  gameOverImg = loadImage("Images/game_over.png");
}


function setup() {
  createCanvas(1360, 850);
  
  coinCount = 0;
  coinCountSprite = createSprite(75, 100);
  coinCountSprite.addAnimation("Score", coinAnimation);
  coinCountSprite.scale = 0.3;
  
  gameOver = createSprite(width/2, 325);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;

  player = createSprite(50, 740);
  player.addAnimation("Steady", playerSteady);
  player.addAnimation("Running Right", playerRightAnimation);
  player.addAnimation("Running Left", playerLeftAnimation);
  player.addAnimation("Steady Left", playerSteadyLeft);
  player.scale = 0.5;

  bomb = new Bomb(650, 560);
  bomb2 = new Bomb(900, 660);
  // bomb.body.addAnimation("Explosion", bombAnimation);

  coin = new Coin(200, 715);

  coin2 = new Coin(450, 570);
  coin3 = new Coin(505, 570);
  coin4 = new Coin(555, 490);
  coin5 = new Coin(650, 400);

  coin6 = new Coin(900, 480);
  coin7 = new Coin(955, 480);
  coin8 = new Coin(1010, 480);
  coin9 = new Coin(1065, 480);

  coin10 = new Coin(555, 735);
  coin11 = new Coin(605, 735);
  coin12 = new Coin(660, 735);
  coin13 = new Coin(715, 735);
  coin14 = new Coin(770, 735);
  coin15 = new Coin(825, 735);
  coin16 = new Coin(500, 735);
  coin17 = new Coin(445, 735);
  
  hurdle = new Hurdle(380, 715);
  hurdle2 = new Hurdle(555, 545);
  hurdle3 = new Hurdle(900, 715);

  brick = new Brick(450, 600);
  brick2 = new Brick(505, 600);
  brick3 = new Brick(560, 600);
  brick4 = new Brick(615, 600);
  brick5 = new Brick(670, 600);

  brick6 = new Brick(900, 510);
  brick7 = new Brick(955, 510);
  brick8 = new Brick(1010, 510);
  brick9 = new Brick(1065, 510);

  brick10 = new Brick(790, 550);
  brick11 = new Brick(790, 585);

  brick12 = new Brick(750, 430);
  brick13 = new Brick(700, 430);
  brick14 = new Brick(650, 430);
  
  // player.depth = hurdle.body.depth;
  // // hurdle2.depth = player.depth;
  // // player.depth = hurdle3.body.depth;
  // player.depth = brick.body.depth;
  console.log(brick.body.height);
  console.log(brick.body.y);
  // player.depth += 1;

  ground = createSprite(600, 760, 2000, 10);
  ground.x = ground.width / 2;
  ground.visible = false;


  player.setCollider("rectangle", 0, 0, player.width - 10, player.height - 50);

  // hurdle.body.debug = true;
  // player.debug = true;
  // brick.body.debug = true;
  bomb.debug = true;
  bomb.body.setCollider("rectangle", 0, 0, bomb.width+10, bomb.height+100);

  baseValue = hurdle.body.y;
  
}

function draw() {
  background(bgImg);
  // bomb.body.collide(hurdle2.body);

  textSize(50);
  fill("white");
  text(": "+coinCount, 100, 110);

  if(player.isTouching(ground)){
    baseValue = 710;
  }

  if(player.isTouching(hurdle.body)){
    baseValue = hurdle2.body.y;
}

  if(player.isTouching(hurdle2.body)){
    baseValue = brick12.body.y;
  }

  if(player.isTouching(brick12.body)||player.isTouching(brick13.body)||player.isTouching(brick14.body)){
    baseValue = brick12.body.y - 100;
    
  }
  
collideSprites();

player.collide(ground);
movements();

  ground.width += 200;

  player.velocityY += 0.25;

  console.log(baseValue);

  drawSprites();
}