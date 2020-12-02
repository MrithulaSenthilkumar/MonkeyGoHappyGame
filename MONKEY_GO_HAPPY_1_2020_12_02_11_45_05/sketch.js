var monkey, monkey_running
var banana, bananaImage, bananasGroup
var obstacle, obstacleImage,obstaclesGroup
var ground
var SurvivalTime = 0;


function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);


  monkey = createSprite(50, 250, 20, 50);
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1;



  Ground = createSprite(300, 400, 600, 10);
  Ground.velocityX = -4;

  console.log(Ground.x);

   bananaGroup= createGroup();
}






function draw() {

  background("lightgreen");

  textSize(20);
  text("SurvivalTime :"+SurvivalTime,380,30);
  

  if (Ground.x < 0) {
    Ground.x = Ground.width / 2;
  }

  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
    if( bananaGroup.isTouching(monkey)){
        Ground.velocityX = 0;
        monkey.velocityY = 0;
        bananaGroup.setVelocityXEach(0); 
    }

  monkey.collide(Ground);

  drawSprites();

  spawnBanana();
  spawnObstacles();
  
}

function spawnBanana() {
  if (frameCount % 100===0) {
    banana = createSprite(600, 50);
    banana.addImage("moving", bananaImage);
    banana.y = Math.round(random(50, 250));
    banana.scale = 0.1;
    banana.velocityX = -8    ;


    //banana.lifetime=200;  
     bananaGroup.add(banana);
  }


}

function spawnObstacles(){
  
  if (frameCount % 100===0) {
    obstacle = createSprite(100, 360);
    obstacle.addImage("o",obstacleImage );
    obstacle.scale = 0.2;
    obstacle.x = Math.round(random(50,300));
    obstacle.lifetime=300;
    
  }
  
}




