class Monsters{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("images/Monster-01.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("pink")
        translate(this.body.position.x, this.body.position.y);
        //ellipseMode(RADIUS);
        //ellipse(0, 0,this.radius);
        imageMode(CENTER)
        image(this.image,0,0,300,200)
        pop();
      }
}