function destroyObjects(b1, b2){
    if (b1.isTouching(b2)) {
        b1.velocityX = 0;
        b1.velocityY = 0;
        b2.changeAnimation("Explosion", bombAnimation);
        setTimeout(function () {b2.destroy(); }, 3000);
        setTimeout(function(){b1.destroy()}, 2000);
        gameOver.visible = true;
        gameOverSound.play();
    }
}