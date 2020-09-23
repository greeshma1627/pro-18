var bananaImage;
var obstacleImage;
var obstacleGroup;
var background;
var score;

function preLoad(){
    backImage = loadImage("jungle.jpg");
    player_running = 
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
    "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",);
   
    bananaImage = loadImage("Banana.png");
    obstacle_img = loadImage("stone.png");
}

function setup(){
    createCanvas(600,200);
    stroke ("white");
    textSize(20);
    fill("white");
    text("score: "+ score,500,50);

    switch(score){
        case 10 :player.scale = 0.12;
        break;
        case 20 : player.scale = 0.14;
        break;
        case 30 : player.scale = 0.16
        break;
        case 40 : player.scale = 0.18;
        break;
        default : break;
    }

    ground = createSprite(200,180,400,20);
  
    ground.x = ground.width/2;
    ground.velocity = -2;
    ground.visible = false;

 background = createSprite ();
 background.addImage('jungle2.jpg')
 background.x = ground.width/2;
 background.velocity = -2;

 if(obstaclesGroup.isTouching(player)){
     player.scale = 2.0;
 }
}
