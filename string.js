class SlingShot {
    constructor (body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY;
        var options ={
          
           body1: bodyA, 
           point2: bodyB,
           length: 10,
           stiffness: 0.04
         }
        this.sling = Constraint.create(options);
      
        World.add(world, this.sling);
    }
display() {

    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyA.position;
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  
}

}

