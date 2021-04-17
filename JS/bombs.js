class Bomb{
    constructor(x, y){
        this.x = x;
        this.y = y
        this.body = createSprite(x, y);
        this.body.addAnimation("un_Exploded",bombImg);
        this.body.addAnimation("Explosion",bombAnimation);
        this.body.scale = 0.15;
    }
}