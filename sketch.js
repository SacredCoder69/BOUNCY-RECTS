var movingRect, fixedRect

function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.debug = true;
  movingRect.shapeColor = "green";
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}

function draw(){
  background("black");

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = movingRect.velocityX * (-1);
    }

    if(movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
      && fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
        movingRect.velocityY = movingRect.velocityY * (-1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
      drawSprites();

}