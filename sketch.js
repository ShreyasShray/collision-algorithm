var fixed_rect, moving_rect;


var gameobject1;
var gameobject2;
var gameobject3;
var gameobject4;

function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite(200, 200, 50, 80);
  moving_rect = createSprite(400, 200, 80, 50);
  fixed_rect.shapeColor = "green";
  moving_rect.shapeColor = "green";

  gameobject1 = createSprite(200, 100, 50, 50);
  gameobject2 = createSprite(300, 100, 50, 50);
  gameobject3 = createSprite(400, 100, 50, 50);
  gameobject4 = createSprite(500, 100, 50, 50);
  
  gameobject1.shapeColor = 'green';
  gameobject2.shapeColor = 'green';
  gameobject3.shapeColor = 'green';
  gameobject4.shapeColor = 'green';
  

  
  


}

function draw() {
  console.log(moving_rect.x - fixed_rect.x);
  background(255,255,255);  

  moving_rect.x = mouseX;
  moving_rect.y = mouseY;
  
  if (isTouching(moving_rect, gameobject1)) {
    fixed_rect.shapeColor = 'blue';
    moving_rect.shapeColor = 'blue';
  }else {
    fixed_rect.shapeColor = 'green';
    moving_rect.shapeColor = 'green';
  }

  drawSprites();
}

function isTouching(object1, object2) {
  if (object1.x - object2.x < (object1.width/2) + (object2.width/2) && object2.x - object1.x < (object2.width/2) + (object1.width/2) && object1.y - object2.y < (object1.height/2) + (object2.height/2) && object2.y - object1.y < (object1.height/2) + (object2.height/2)) {
    return true;
  }else {
    return false;
  }
}