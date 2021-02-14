class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true,
        }
        this.ground=Bodies.rectangle(x,y,height,options);
        this.h=h;
        this.w=w;
        World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.w,this.h);
    }
}