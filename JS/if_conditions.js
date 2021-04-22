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

    if ((keyWentDown(UP_ARROW) || keyWentDown("w")) && player.y >= baseValue) {
        player.velocityX = 0;
        player.velocityY = -7;
    }

    if (keyWentDown(DOWN_ARROW) || keyWentDown("s")) {
        player.velocityY = 15;
    }

    if (((keyDown(RIGHT_ARROW) && keyWentDown(UP_ARROW)) || (keyDown("d") && keyWentDown("w"))) && player.y >= baseValue) {
        player.velocityX = 5;
        player.velocityY = -7;
    }
    if ((keyDown(UP_ARROW) && keyWentDown(RIGHT_ARROW)) && player.y >= baseValue) {
        player.velocityX = 5;
        player.velocityY = -7;
    }
    if (((keyDown(LEFT_ARROW) && keyWentDown(UP_ARROW)) || (keyDown("a") && keyWentDown("w"))) && player.y >= baseValue) {
        player.velocityX = -5;
        player.velocityY = -7;
    }
    if ((keyDown(UP_ARROW) && keyWentDown(LEFT_ARROW)) && player.y >= baseValue) {
        player.velocityX = -5;
        player.velocityY = -7;
    }
    if (((keyDown(LEFT_ARROW) && keyDown(RIGHT_ARROW)) || (keyDown("a") && keyDown("d"))) && player.y >= baseValue) {
        player.velocityX = 0;
        player.velocityY = 0;
    }

    destroyObjects(player, bomb.body);
    destroyObjects(player, bomb2.body);
    destroyObjects(player, bomb3.body);

    collectCoins(player, coin.body);
    collectCoins(player, coin2.body);
    collectCoins(player, coin3.body);
    collectCoins(player, coin4.body);
    collectCoins(player, coin5.body);
    collectCoins(player, coin6.body);
    collectCoins(player, coin7.body);
    collectCoins(player, coin8.body);
    collectCoins(player, coin9.body);
    collectCoins(player, coin10.body);
    collectCoins(player, coin11.body);
    collectCoins(player, coin12.body);
    collectCoins(player, coin13.body);
    collectCoins(player, coin14.body);
    collectCoins(player, coin15.body);
    collectCoins(player, coin16.body);
    collectCoins(player, coin17.body);
    collectCoins(player, coin18.body);
    collectCoins(player, coin19.body);
    collectCoins(player, coin20.body);
    collectCoins(player, coin21.body);
    collectCoins(player, coin22.body);
    collectCoins(player, coin23.body);
    collectCoins(player, coin24.body);
    collectCoins(player, coin25.body);
    collectCoins(player, coin26.body);
    collectCoins(player, coin27.body);
    collectCoins(player, coin28.body);
    collectCoins(player, coin29.body);
    collectCoins(player, coin30.body);
    collectCoins(player, coin31.body);
    collectCoins(player, coin32.body);
    collectCoins(player, coin33.body);
    collectCoins(player, coin34.body);
    // collectCoins(player, coin35.body);
    collectCoins(player, coin36.body);
    collectCoins(player, coin37.body);
    collectCoins(player, coin38.body);


}

