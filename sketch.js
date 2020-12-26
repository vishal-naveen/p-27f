
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1 = new Bob(180, 550);
	bob2 = new Bob(280, 550);
	bob3 = new Bob(380, 550);
	bob4 = new Bob(480, 550);
	bob5 = new Bob(580, 550);

	roof = new Roof(400, 50, 600, 10);

	chain1 = new Chain(bob1.body,{x:180,y:50});
	chain2 = new Chain(bob2.body,{x:280,y:50});
	chain3 = new Chain(bob3.body,{x:380,y:50});
	chain4 = new Chain(bob4.body,{x:480,y:50});
	chain5 = new Chain(bob5.body,{x:580,y:50});


	
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("Inside");
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -730, y: -400})
	}
}

