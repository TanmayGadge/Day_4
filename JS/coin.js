class Coin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.body = createSprite(x, y);
        this.body.addAnimation("Spinning", coinAnimation);
        this.body.scale = 0.1;
    }
}