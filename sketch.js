var player , playerimg;
var obstacles , obstacleimg;
var bg,bgimg ;


function setup() {
  
  createCanvas(800,800);
  bg = createSprite(0,800,50,800)
  bg.addImage(bgimg);
  bg.scale = 2.3 ; 
 bg.velocityY = 4;
 
 player =createSprite(400,750 )
 player.addImage(playerimg)
 player.debug = true
 player.setCollider("rectangle",180,-60,80,150)


}
function preload(){
playerimg = loadImage("1.png");
obstacleimg = loadImage("2].png");
bgimg = loadImage("4.jpg"); 



}

function draw() {
  background(0);
  fill("white")
  
  console.log(bg.y)
  if (bg.y>800){
 bg.y =height /2

  } 

player.x = mouseX;
player.y = mouseY ;

spawnAsteroids();


  drawSprites();
  text(mouseX+","+mouseY , mouseX,mouseY)
}
function spawnAsteroids(){
  if(frameCount%80 === 0  ){
    var asteroids = createSprite (random(50,750),random(50,750),10,10)
    asteroids.addImage(obstacleimg)
  }
}