class Bob {
    constructor(x,y){
        var opts = {
            restituiton : 1,
            friction : 4,
            density : 1.2,
        }

        this.body = Bodies.circle(x,y,50,opts);
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        fill("green");
        ellipse(pos.x , pos.y , 50, 50);
        pop();
    }
}