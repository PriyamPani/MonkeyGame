
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var bananaGroup;
var ground;
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -12;
  ground.x = ground.x/2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("yellow")
  text("Score:"+ score,100,40);
  
  stroke("black")
  textSize(20);
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,200,40);
  spawn_fruits();
  spawn_obstacle();
  if (ground.x<0 ){
      ground.x = ground.width/2;
      
      }
  
 if (keyDown("space") && monkey.y> 270){
     monkey.velocityY = -12;
     }
  monkey.velocityY = monkey.velocityY + 0.6 ;
  monkey.collide(ground);
  
  if (bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score+1
    
  }
  if (obstacleGroup.isTouching(monkey)) {
    score = score-1;
    obstacleGroup.destroyEach();
    
  }
  drawSprites();
  
  
}

function spawn_fruits(){
   if (frameCount % 100 === 0) {
    var banana = createSprite(600,150,40,10);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -7;
    banana.lifetime = 400;
     
     bananaGroup.add(banana);
   }
  
  
}

function spawn_obstacle(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,330,40,10);
    obstacle.collide(ground);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 400;
    
    obstacleGroup.add(obstacle);
   }
  
  
}




