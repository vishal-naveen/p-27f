var object_options
class Bob{

    constructor(x,y) {

        object_options = {
            isStatic : false,
            friction: 5,
            density: 5,
            restitution: 0.8

            }
        this.body=Bodies.circle(x, y, 25, object_options)
        World.add(world, this.body);
        }
        display(){
            push()
            ellipseMode(RADIUS);
            fill(255,0,255);
            ellipse(this.body.position.x,this.body.position.y,50,50);
            pop();
        }
}