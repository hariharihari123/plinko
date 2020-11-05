
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var g,s1,s2,sl1,sl2,sl3,sl4,sl5,b1,b2,b3,b4,b5,b21,b22,b23,b24,b31,b32,b34,b35,b36,b37,bs0,bs1,bs2,bs3,bs4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	
	//Create the Bodies Here.
    g = new rectangle(400,550,500,20);
	s1 = new rectangle(160,310,20,500);
	s2 = new rectangle(660,310,20,500);
	sl1 = new rectangle(260,466,20,150);
	sl2 = new rectangle(360,466,20,150);
	sl3 = new rectangle(460,466,20,150);
	sl4 = new rectangle(560,466,20,150);
	b1 = new ball(200,150,30);
	b2 = new ball(300,150,30);
	b3 = new ball(400,150,30);
	b4 = new ball(500,150,30);
	b5 = new ball(600,150,30);
	b24 = new ball(550,200,30);
	b21 = new ball(250,200,30);
	b22 = new ball(350,200,30);
	b23 = new ball(450,200,30);
	b31 = new ball(200,150,30);
	b32 = new ball(300,250,30);
	b33 = new ball(400,250,30);
	b34 = new ball(500,250,30);
	b35 = new ball(450,300,30);
	b36 = new ball(350,300,30);
	bs0 = new ball2(Math.round(random(200,600)),50,10);
	bs1 = new ball2(Math.round(random(200,600)),50,10);
	bs2 = new ball2(Math.round(random(200,600)),50,10);
	bs3 = new ball2(Math.round(random(200,600)),50,10);
	bs4 = new ball2(Math.round(random(200,600)),50,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites();
  g.display();
  s1.display();
  s2.display();
  sl1.display();
  sl2.display();
  sl3.display();
  sl4.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  bs0.display();
  bs1.display();
  bs2.display();
  bs3.display();
  bs4.display();
}