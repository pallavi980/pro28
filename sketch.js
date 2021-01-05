
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shinchan,stone,tree,mango;
 var m1,m2,m3,m4,m5,m6,m7,m8;

function preload()
{
	shinchanImg=loadImage("shinchan.jpg")
	stoneImg=loadImage("stone.jpg")
	treeImg=loadImage("th.jpg")
	mangoImg=loadImage("mango.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER)
	shinchan=createSprite(200,400,10,10)
	shinchan.addImage(shinchanImg)
	shinchan.scale=0.1

	stone=createSprite(150,400,80,70)
	stone.addImage(stoneImg)
	stone.scale=0.1

	tree=createSprite(500,300,50,50)
	tree.addImage(treeImg)
	tree.scale=2
   
	m1=new Mango(100,100,10,10)


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  m1.display();
  
  drawSprites();
 
}



