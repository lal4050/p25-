class Dustbin{

    constructor(x,y){
        
        var options ={
            isStatic:true,
             restitution:0.3,
             friction:0.5,
             density:1.5
        }
    
        this.body = Bodies.rectangle(x,y,200,213,options);
        this.width=200;
        this.height=213;
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png");
    
    }
    
    
    display(){
        var pos= this.body.position;
        push()
        translate(pos.x, pos.y+10);
        rectMode(CENTER);
        fill("black");
        translate(pos.x, pos.y); 
        pop()    
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,pos.width, pos.height)
    }
    
    
    
    }