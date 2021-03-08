var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  

  speed=random(59,90);
  weight=random(400,1500);

  car = createSprite(10,200,30,30);
  car.velocityX=speed;
  car.shapeColor=color(255);


  wall = createSprite(600,200,60,height/2);
  wall.shapeColor=color("pink");
  
}

function draw() {
  background("lightblue");  

  

  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocity=0;
    var deformation=0.5*weigt*speed*speed/22500
  }
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }

  drawSprites();
}