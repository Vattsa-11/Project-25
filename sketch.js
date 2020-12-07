
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var dustbin;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,height - 20,width,25);
	ball = new Paper(200,200);
	wall1 = new Box(890,350,20,225);
	wall2 = new Box(710,350,20,225);
	wall3 = new Box(800,height - 35,200,20);
	bound1 = new Ground(width/2,0-10,width,20);
	bound2 = new Ground(0-10,height/2,20,height);
	bound3 = new Ground(width+10,height/2,20,height);
	dustbin = new PIC(800,350,0,0);

	Engine.run(engine);
  
	//ball.setCollider("circle",0,0,40);
	//ball.debug = true;
}

function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);
   
  ground.display();
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();

  bound1.display();
  bound2.display();
  bound3.display();
  dustbin.display();

}

function keyPressed (){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-85,y:-85});
	}
}

//function keyPressed (){	
//} 