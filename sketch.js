var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
   speed=random(55,90)
   weight=random(223,321)
   thickness=random(22,45)
   bullet = createSprite(50, 200, 30, 30);
   wall = createSprite(1200, 200, thickness, height/2);
   wall.shapeColor = color(80,80,80)
   bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
   if(hasCollided (bullet,wall))
   {
     bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
     
    if (damage > 10) {
      bullet.shapeColor = color(255,0,0)
    }

    if (damage < 10) {
      bullet.shapeColor = color(0,255,0)
    }
   }

   
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallLeftEdge = lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}