var player, hurdle, brick;
var bgImg, hurdleImg, brickImg, playerRightAnimation, playerLeftAnimation;

var playerSteady, playerSteadyLeft;
var bombAnimation, bombImg, bomb;

var ground, hurdle2, hurdle3, hurdle4, hurdle5, hurdle6;
var brick2, brick3, brick4, brick5;
var coinAnimation;

var coin, coin2, coin3, coin4;


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
}


function setup() {
  createCanvas(1340, 850);

  player = createSprite(50, 740);
  player.addAnimation("Steady", playerSteady);
  player.addAnimation("Running Right", playerRightAnimation);
  player.addAnimation("Running Left", playerLeftAnimation);
  player.addAnimation("Steady Left", playerSteadyLeft);
  player.scale = 0.5;

  bomb = new Bomb(300, 735);
  // bomb.body.addAnimation("Explosion", bombAnimation);

  coin = new Coin(200, 715);


  hurdle = new Hurdle(380, 715);
  hurdle2 = new Hurdle(800, 715);
  hurdle3 = new Hurdle(900, 715);

  brick = new Brick(450, 600);
  brick2 = new Brick(505, 600);
  brick3 = new Brick(560, 600);
  brick4 = new Brick(615, 600);
  brick5 = new Brick(670, 600);

  // player.depth = hurdle.body.depth;
  // // hurdle2.depth = player.depth;
  // // player.depth = hurdle3.body.depth;
  player.depth = brick.body.depth;

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
}

function draw() {
  background(bgImg);


  player.collide(brick.body);
  player.collide(brick2.body);
  player.collide(brick3.body);
  player.collide(brick4.body);
  player.collide(brick5.body);
  
  player.collide(hurdle.body);
  player.collide(hurdle2.body);
  player.collide(hurdle3.body);

  player.collide(ground);

  ground.width += 200;

  movements();
  player.velocityY += 0.25;

  drawSprites();
}