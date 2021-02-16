var gun
var monkey, wolf, bird1, bird2, deer, man, point
var monkeyImage, wolfImage, bird1Image, bird2Image, deer, manImage, pointImage
var gunImage, BgImage
function preload(){
monkeyImage=loadAnimation("monkey.png");
wolfImage=loadAnimation("wolf.gif");
bird1Image=loadAnimation("bird1.gif");
bird2Image=loadAnimation("bird2.gif");
deerImage=loadAnimation("deer.gif");
manImage=loadAnimation("runningMan.gif");
pointImage=loadAnimation("20P.gif");
gunImage=loadImage("gun.png")
BgImage=loadImage("background.png")
}
function setup(){
  createCanvas(1300,750);
  gun=createSprite(650,375,100,100);
  gun.addImage(gunImage);
  gun.scale=0.25;
  monkey=createSprite(random(1,100),100,100,100)
  monkey.addAnimation("monkey",monkeyImage);
  monkey.scale=0.5;
  wolf=createSprite(150,630,100,100)
  wolf.addAnimation("wolf",wolfImage);
  wolf.scale=0.9;
  bird1=createSprite(600,100,100,100)
  bird1.addAnimation("bird1",bird1Image);
  bird1.scale=0.3
  bird2=createSprite(800,100,100,100)
  bird2.addAnimation("bird2", bird2Image);
  bird2.scale=0.25
  deer=createSprite(1100,500,100,100)
  deer.addAnimation("deer",deerImage);
  deer.scale=0.7;
  man=createSprite(700,550,100,100)
  man.addAnimation("man1", manImage);
  man.scale=0.8;
  point=createSprite(700,400,100,100)
  point.addAnimation("point", pointImage);
  point.scale=0.2
}

function draw() {
  background(BgImage); 
  gun.x=mouseX;
  gun.y=mouseY;


  drawSprites();
}