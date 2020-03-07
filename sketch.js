var sun;
var mercury, venus, earth, mars;

function setup() {
  createCanvas(800,400);
  
  sun = createSprite(-200, 400, 800, 800);
  sun.shapeColor = "yellow";
  sun.velocityX = 1;

  mercury = createSprite(350, 200, 35, 35);
  mercury.shapeColor = "brown";

  venus = createSprite(450, 200, 45, 45);
  venus.shapeColor = "brown";

  earth = createSprite(550, 200, 65, 65);
  earth.shapeColor = "blue";

  mars = createSprite(650, 200, 55, 55);
  mars.shapeColor = "red";
}

function draw() {
  background(255,255,255);

  sun.velocityX = 1;

  if (sun.isTouching(mercury)) {
    mercury.visible = false;
  }

  if (sun.isTouching(venus)) {
    venus.visible = false;
  }

  if (sun.isTouching(earth)) {
    earth.visible = false;
  }

  if (sun.collide(mars)) {
    mars.visible = false;
  }

  drawSprites();
}