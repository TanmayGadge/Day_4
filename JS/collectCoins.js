function collectCoins(b1, b2){
    if (b1.isTouching(b2)) {
        b2.destroy();
        coinCount ++;
        coinSound.play();
    }
}