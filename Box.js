class Box{

    constructor(x,y){
     
        var options={
            isStatic:false,
            restituiton:1
            
        }
 
        this.body=Bodies.rectangle(x,y,30,40,options);
        World.add(myworld,this.body);
    }

    display(){

        push()
        angleMode(RADIANS)
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,30,40);
        pop()

    }
}