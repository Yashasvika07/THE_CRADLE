class Rope {
    constructor(body1 , body2 , offsetX , offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var opts =  {   
            bodyA : body1 ,
            bodyB : body2 ,
            pointB:{x:this.offsetX , y:this.offsetY}

         }
        this.rope = Matter.Constraint.create(opts);
        World.add(world, this.rope);
    }
    display(){

        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(4);
        var Anchor1x = point1.x;
        var Anchor1y = point1.y;

        var Anchor2x = point2.x + this.offsetX;
        var Anchor2y = point2.y + this.offsetY ;

        line( Anchor1x , Anchor1y , Anchor2x , Anchor2y);
    }
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-150,y:-150});
    }
}