var bathImg, brushImg, drinkImg, eatImg, gym1Img, gym2Img, issImg, moveImg, sleepImg;
var astronaut;
var iss;
var edges;

function preload() {
 bathImg = loadAnimation("./Images/Astronaut's daily routine/bath1.png","./Images/Astronaut's daily routine/bath2.png");
 brushImg = loadAnimation("./Images/Astronaut's daily routine/brush.png");
 drinkImg = loadAnimation("./Images/Astronaut's daily routine/drink1.png","./Images/Astronaut's daily routine/drink2.png");
 eatImg = loadAnimation("./Images/Astronaut's daily routine/eat1.png","./Images/Astronaut's daily routine/eat2.png");
 gym1Img = loadAnimation("./Images/Astronaut's daily routine/gym1.png","./Images/Astronaut's daily routine/gym2.png");
 //gym2Img = loadAnimation("./Images/gym11.png","./Images/gym12.png");
 issImg = loadImage("./Images/Astronaut's daily routine/iss.png");
 moveImg = loadAnimation("./Images/Astronaut's daily routine/move.png","./Images/Astronaut's daily routine/move1.png");
 sleepImg = loadAnimation("./Images/Astronaut's daily routine/sleep.png");
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale = 0.1;
}

function draw() {
  background(issImg);  

  text("Instructions: ",20,20);
  text("Up Arrow = Brushing",20,40);
  text("Down Arrow = Gymming",20,60);
  text("Left Arrow = Eating",20,80);
  text("Right Arrow = Bathing",20,100);
  text("M key = Moving",20,120);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if (keyDown("UP_ARROW"))
  {
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW"))
  {
    astronaut.addAnimation("gymming",gym1Img);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW"))
  {
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown("RIGHT_ARROW"))
  {
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m"))
  {
    astronaut.addAnimation("moving",moveImg);
    astronaut.changeAnimation("moving");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}