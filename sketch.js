
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground;
var bob;
var bob2;
var sling;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(330,110,330,22);
	bob = new Bob(330,440,22);
	bob2 = new Bob(370,440,22);
	Engine.run(engine);
    sling = new String(bob.body,ground.body);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  drawSprites();
  ground.display();
  bob.display();
 bob2.display();
 sling.display();

}



