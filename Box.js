class Box {
    constructor(x,y,width,height){
        var options={
          friction:1.0,
          density:0.04,
          restitution:0.8
        }
   
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
     }  
   
     display(){
        var pos=this.body.position;
        var angle=this.body.angle;
         
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        
        stroke("brown")
        strokeWeight(4);
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
     }
};