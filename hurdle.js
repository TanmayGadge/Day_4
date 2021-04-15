class Hurdle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = createSprite(x, y);
        this.body.addImage(hurdleImg);
        this.body.scale = 0.5;
    }
}