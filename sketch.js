
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var mango1, mango2, mango3, mango4, mango5;
var tree1;
var stoneObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(600, 700);
	boy.X = 200;
	boy.Y = 700;
	boy.addAnimation("images/boy.png");
	mango1 = new Mangoes(600, 500);
	mango2 = new Mangoes(660, 500);
	mango3 = new Mangoes(630, 500);
	mango4 = new Mangoes(620, 500);
	mango5 = new Mangoes(650, 500);
	stoneObj = new Stone(100, 650);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  stoneObj.display();
  
  drawSprites();
 
}
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body, false);
	}
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObj.attach(stoneObj.body);
	}
}


