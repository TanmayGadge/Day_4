class Hurdle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = createSprite(x, y);
        this.body.addImage(hurdleImg);
        this.body.scale = 0.5;
        this.body.setCollider("rectangle", 0, 0, this.body.width-150, this.body.height-15);
        player.depth = this.body.depth;
        player.depth += 1;
        
    }
}