const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,line1,linee1;


function setup(){
    canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,490,1200,20,ground_options);
    World.add(world,ground);

     ball = new Paper(200,200,50,50,40);

    line1 = new Dustbin(1000,320);
    linee1 = new Line(1110,320,30,315);    
    linee2 = new Line(890,320,30,315);


    console.log(ground);
}

function draw(){
    background("white");

    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);

    linee1.display();
    linee2.display();
    ball.display();
    line1.display();

}

function keyPressed(){

  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:15,y:-20}); 
}
 
}

