class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 575
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        //line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
    }
    
}