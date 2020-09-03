const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var score = 0; 

var bg = "images/bg1.jpg";

var backgroundImg;

function preload(){
  polygonImg = loadImage("images/polygon1.png");
  getBkgrndImg();
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createCanvas(1200,600);

  ground = new Ground(400,270,200,10);
  ground1 = new Ground(680,270,220,10);

  polygon = Bodies.circle(50,200,20);
  World.add(world,this.polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,155,30,40);

  block10 = new Block(650,150,30,40);
  block11 = new Block(680,150,30,40);
  block12 = new Block(710,150,30,40);
  block13 = new Block(650,190,30,40);
  block14 = new Block(680,190,30,40);
  block15 = new Block(710,190,30,40);
  block16 = new Block(620,190,30,40);
  block17 = new Block(740,190,30,40);
  block18 = new Block(680,110,30,40);
  block19 = new Block(620,230,30,40);
  block20 = new Block(650,230,30,40);
  block21 = new Block(680,230,30,40);
  block22 = new Block(710,230,30,40);
  block23 = new Block(740,230,30,40);
  block24 = new Block(770,230,30,40);
  block25 = new Block(590,230,30,40);
}


function draw() {
  if(backgroundImg)
  background(backgroundImg); 
    textSize(35);
    fill("white");
    text("score"+ score, 750,40);
    Engine.update(engine);

  ground.display();
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}

async function getBkgrndImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/PST8PDT");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if (hour>=06 && hour<=19){
      bg = "images/bg1.jpg";
  }
  else{
      bg = "images/bg2.jpg";
  }
  backgroundImg = loadImage(bg);
}