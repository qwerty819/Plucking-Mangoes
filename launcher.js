class Launcher{
    constructor(BodyA, pointB){
        var options={
            BodyA: BodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 0.3
        }
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
		this.launcher.bodyA=body;
	}
    
    fly(){
        this.launcher.bodyA = null;
    }
    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
