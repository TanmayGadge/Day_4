function movements() {
    if (keyWentDown(RIGHT_ARROW) || keyWentDown("d")) {
        player.velocityX = 5;
        player.velocityY = 0;
        player.changeAnimation("Running Right", playerRightAnimation);
    }

    if (keyWentUp(RIGHT_ARROW) || keyWentUp("d")) {
        player.velocityX = 0;
        player.velocityY = 0;
        player.changeAnimation("Steady", playerSteady);
    }

    if (keyWentDown(LEFT_ARROW) || keyWentDown("a")) {
        player.velocityX = -5;
        player.velocityY = 0;
        player.changeAnimation("Running Left", playerLeftAnimation);
    }
    if (keyWentUp(LEFT_ARROW) || keyWentUp("a")) {
        player.velocityX = 0;
        player.velocityY = 0;
        player.changeAnimation("Steady Left", playerSteadyLeft);
    }

    if (keyWentDown(UP_ARROW) || keyWentDown("w")) {
        player.velocityX = 0;
        player.velocityY = -7;
    }

    if (keyWentDown(DOWN_ARROW) || keyWentDown("s")) {
        player.velocityY = 15;
    }

    if (keyDown(RIGHT_ARROW) && keyWentDown(UP_ARROW)) {
        player.velocityX = 5;
        player.velocityY = -7;
    }
    if (keyDown(UP_ARROW) && keyWentDown(RIGHT_ARROW)) {
        player.velocityX = 5;
        player.velocityY = -7;
    }
    if (keyDown(LEFT_ARROW) && keyWentDown(UP_ARROW)) {
        player.velocityX = -5;
        player.velocityY = -7;
    }
    if (keyDown(UP_ARROW) && keyWentDown(LEFT_ARROW)) {
        player.velocityX = -5;
        player.velocityY = -7;
    }
    if (keyDown(LEFT_ARROW) && keyDown(RIGHT_ARROW)) {
        player.velocityX = 0;
        player.velocityY = 0;
    }

 

    // if (player.isTouching(bomb.body)) {
    //     player.velocityX = 0;
    //     player.velocityY = 0;
    //     bomb.body.changeAnimation("Explosion", bombAnimation);
    //     setTimeout(function () {bomb.body.destroy(); }, 3000);
    //     setTimeout(function(){player.destroy()}, 2000);
    // }
    // if (player.isTouching(bomb2.body)) {
    //     player.velocityX = 0;
    //     player.velocityY = 0;
    //     bomb.body.changeAnimation("Explosion", bombAnimation);
    //     setTimeout(function () {bomb2.body.destroy(); }, 3000);
    //     setTimeout(function(){player.destroy()}, 2000);
    // }

    destroyObjects(player, bomb.body);
    destroyObjects(player, bomb2.body);

    collectCoins(player, coin.body);
    collectCoins(player, coin2.body);
    collectCoins(player, coin3.body);
    collectCoins(player, coin4.body);
    collectCoins(player, coin5.body);
    collectCoins(player, coin6.body);
    collectCoins(player, coin7.body);
    collectCoins(player, coin8.body);
    collectCoins(player, coin9.body);
}

