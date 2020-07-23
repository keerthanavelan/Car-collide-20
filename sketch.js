var car,wall;
var speer,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
  car.velocityX = speed;
  car.shapeColor = color("paleturquoise")
  deformation = (0.5*weight*speed*speed)/22500
}
function draw() {
  background(255,255,255);
  car_collide();
  drawSprites();
}
function car_collide(){
   if (car.collide(wall)){
    car.velocityX = 0;
    if (deformation < 100){
      car.shapeColor = color("springgreen");
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = color("tomato");
    }
    if (deformation > 180 ){
      car.shapeColor = color("crimson");
    }
    
  }
}
