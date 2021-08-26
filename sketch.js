
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var   engine,world ;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new paper (100,600,10);
  ground = new ground (400,680,800,20);

  leftSide = new Dustbin (550,620,20,100);
  bottom = new Dustbin (750,800,100,20);
  rightSide = new Dustbin (670,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);
  
 ball.display();
 ground.display();
 leftSide.display();
 bottom.display();
 rightSide.display();

  drawSprites();
 
}


function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:15, y: -15})
}
}
	

