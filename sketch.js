var car, wall,carGroup;
var speed=0;
var weight=0;
var deformation=0;
var test,testImage;
var testPressed=false;

function preload(){
  testImage = loadImage("test.png")
}

function setup() {
  createCanvas(800,400);
  
  wall=createSprite(600, 175, 60, 75);
  wall.shapeColor="brown";
  test=createSprite(400, 50, 40, 40);
  test.scale=0.3;
  test.addImage(testImage);
  carGroup=new Group();
}

function draw() {
  background(1000); 
  if (testPressed===true){
    if(wall.x-car.x<(car.width+wall.width)/2){
      car.lifetime=10
     
      car.velocityX=0;
      if(deformation>180){
        car.shapeColor="red"; 
      }
      if(deformation<180&& deformation>100){
        car.shapeColor="Yellow";
      }
      if(deformation<100){
        car.shapeColor="green";
      }
      testPressed=false
      
    }
    
  }
   
  drawSprites();
  text("Speed = "+round(speed)+"\nWeight = "+round(weight)+"\nDeformation = "+round(deformation),400,350);
}

function mouseClicked() {
  testPressed=true;
  car=createSprite(100, 200, 50, 30);
  car.velocityX=speed;
  car.shapeColor="blue";
  speed=random(55,90);
  weight=random(400,1500);
  deformation = 0.5*weight*speed*speed/22500;
}
