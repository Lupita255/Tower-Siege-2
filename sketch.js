const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var box31,box32,box33,box34,box35,box36,box37,box38,box39;
var polygon;
var attach;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(600,590,1200,20);
  ground2=new Ground(480,400,250,10);
  ground3=new Ground(850,260,250,10);

   box1=new Block(390,370,30,40)
   box2=new Block(420,370,30,40)
   box3=new Block(450,370,30,40)
   box4=new Block(480,370,30,40)
   box5=new Block(510,370,30,40)
   box6=new Block(540,370,30,40)
   box7=new Block(570,370,30,40)
   box8=new Block(420,340,30,40)
   box9=new Block(450,340,30,40)
   box10=new Block(480,340,30,40)
   box11=new Block(510,340,30,40)
   box12=new Block(540,340,30,40)
   box13=new Block(450,310,30,40)
   box14=new Block(480,310,30,40)
   box15=new Block(510,310,30,40)
   box16=new Block(480,280,30,40)

   box17=new Block(760,230,30,40);
   box18=new Block(790,230,30,40);
   box19=new Block(820,230,30,40);
   box20=new Block(850,230,30,40);
   box21=new Block(880,230,30,40);
   box22=new Block(910,230,30,40);
   box23=new Block(940,230,30,40);
   box24=new Block(790,200,30,40);
   box25=new Block(820,200,30,40);
   box26=new Block(850,200,30,40);
   box27=new Block(880,200,30,40);
   box28=new Block(910,200,30,40);
   box29=new Block(820,170,30,40);
   box30=new Block(850,170,30,40);
   box31=new Block(880,170,30,40);
   box32=new Block(850,140,30,40);

   polygon=new Polygon(150,300,20);

   attach=new chain(polygon.body,{x:150, y:300});


  Engine.run(engine);
}

function draw(){
    background(255)
    textSize(24);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,50)
    text("Press Space for a Second Chance to Play",650,500);

    ground.display();
    ground2.display();
    ground3.display();
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
  
    polygon.display();

    attach.display();
    
}

function mouseDragged(){
	polygon.body.position.x = mouseX;
  polygon.body.position.y = mouseY;
}

function mouseReleased(){
	attach.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:150, y:300});
    attach.attach(polygon.body);
  }
}

