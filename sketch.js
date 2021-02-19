var fixedRect, movingRect,fixedRect1, car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;

  car= createSprite(500,500,50,50);
  car.shapeColor= "red";
  car.velocityX= 3;

  wall= createSprite(1000,500,50,1000);
  wall.shapeColor= "brown";


  fixedRect1= createSprite(300,300,70,30);
  fixedRect1.shapeColor= "yellow";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "blue";
  fixedRect1.shapeColor = "blue";
  }
else{
  movingRect.shapeColor= "green";
  fixedRect.shapeColor= "green";
  fixedRect1.shapeColor="green";
}
if(collide(car,wall)){
  car.velocityX=0;
  car.shapeColor="blue";
}


  
  drawSprites();
}

