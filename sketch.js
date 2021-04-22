var player, hurdle, brick;
var bgImg, hurdleImg, brickImg, playerRightAnimation, playerLeftAnimation;

var playerSteady, playerSteadyLeft;
var bombAnimation, bombImg, bomb, bomb2, bomb3;

var ground, hurdle2, hurdle3, hurdle4, hurdle5, hurdle6, hurdle7, hurdle8, hurdle9, hurdle10, hurdle11, hurdle12, hurdle13, hurdle14;

var brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13, brick14;
var brick15, brick16, brick17, brick18, brick19, brick20, brick21, brick22, brick23, brick24, brick25, brick26, brick27, brick28;
var brick29, brick30, brick31, brick32, brick33, brick34, brick35, brick36, brick37, brick38, brick39, brick40;

var baseValue;
var coinAnimation;

var coin, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, cooin11, coin12, coin13, coin14;
var coin15, coin16, coin17, coin18, coin19, coin20, coin21, coin22, coin23, coin24, coin25, coin26, coin27, coin28, coin29, coin30;
var coin31, coin32, coin33, coin34, coin35, coin36, coin37, coin38, coin39, coin40, coin41, coin42, coin43, coin44, coin45;
var coin46, coin47;

var coinSound, startSound, gameOverSound;

var coinCount;
var player2, player2Img;
var gameOverImg, gameOver;
var flag, flag2;


function preload() {
  bgImg = loadImage("Images/background2.png");
  hurdleImg = loadImage("Images/hurdle-removebg-preview.png");
  brickImg = loadImage("Images/bricks.png");
  player2Img = loadImage("Images/player2.png");

  coinSound = loadSound("Sounds/coinSound.wav");
  startSound = loadSound("Sounds/startSound.wav");
  gameOverSound = loadSound("Sounds/gameOverSound.wav");

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

  flag = false;
  flag2 = false;

  gameOver = createSprite(width / 2, 190);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;

  player = createSprite(50, 740);
  player.addAnimation("Steady", playerSteady);
  player.addAnimation("Running Right", playerRightAnimation);
  player.addAnimation("Running Left", playerLeftAnimation);
  player.addAnimation("Steady Left", playerSteadyLeft);
  player.scale = 0.5;

  player2 = createSprite(980, 715);
  player2.addImage(player2Img);
  player2.scale = 0.75;

  createBombs();

  createCoins();
  createHurdles();


  createBricks();

  ground = createSprite(600, 760, 2000, 10);
  ground.x = ground.width / 2;
  ground.visible = false;


  player.setCollider("rectangle", 0, 0, player.width - 10, player.height - 50);

  bomb.debug = true;
  bomb.body.setCollider("rectangle", 0, 0, bomb.width + 10, bomb.height + 100);

  baseValue = hurdle.body.y;

  startSound.play();

}

function draw() {
  background(bgImg);


  textSize(50);
  fill("white");
  text(": " + coinCount, 100, 110);

  if (player.isTouching(ground)) {
    baseValue = 710;
  }

  if (player.isTouching(hurdle.body)) {
    baseValue = hurdle2.body.y;
  }

  if (player.isTouching(hurdle2.body)) {
    baseValue = brick12.body.y;
  }

  if (player.isTouching(brick12.body) || player.isTouching(brick13.body) || player.isTouching(brick14.body)) {
    baseValue = brick12.body.y - 100;
  }

  if (player.isTouching(brick15.body) || player.isTouching(brick16.body) || player.isTouching(brick17.body)) {
    baseValue = brick15.body.y - 100;
  }

  if (player.isTouching(brick18.body) || player.isTouching(brick19.body) || player.isTouching(brick20.body)) {
    baseValue = brick18.body.y - 100;

  }
  // if (player.isTouching(hurdle4.body)){
  //   player.x =1300;
  // }


  if (player.isTouching(brick24.body)) {
    text("Press Space to travel", 200, 100);
    if (keyWentDown("space")) {
      player.y = 715;
      player.x = 1000;
    }
  }

  if (keyWentDown("k") || player.x > 1090&& flag === false) {
    // brick25.body.visible = true;
    // brick26.body.visible = true;
    // brick27.body.visible = true;
    // brick28.body.visible = true;
    // brick29.body.visible = true;
    // brick30.body.visible = true;
    brick25 = new Brick(1050, 735);
    brick26 = new Brick(1050, 700);
    brick27 = new Brick(1050, 665);
    brick28 = new Brick(1050, 630);
    brick29 = new Brick(1050, 595);
    brick30 = new Brick(1050, 560);
    flag = true;

    push();
    textSize(20);
    fill("yellow");
    text("Stand on brick which doesn't have a coin.\npress 'r' to Re-Spawn", width / 2 - 100, 200);
    pop();

  }

  if (keyWentDown('r') && player.x > 1090) {
    player.x = 50;
    player.y = 740;

    brick25.body.destroy();
    brick26.body.destroy();
    brick27.body.destroy();
    brick28.body.destroy();
    brick29.body.destroy();
    brick30.body.destroy();
  }

  if (brick25 && brick26 && brick27 && brick28 && brick29 && brick30) {
    player.collide(brick25.body);
    player.collide(brick26.body);
    player.collide(brick27.body);
    player.collide(brick28.body);
    player.collide(brick29.body);
    player.collide(brick30.body);
  }

  if (player.isTouching(player2) && flag2 === false) {
    player2.destroy();
    flag2 = true;
  }

  if(flag2){
    push();
    textSize(20);
    text("Friend Rescued", width / 2, height / 4);
    pop();
  }
  collideSprites();

  player.collide(ground);
  movements();

  ground.width += 200;

  player.velocityY += 0.25;

  // console.log(baseValue);

  drawSprites();
}