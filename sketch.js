var fairy, star;
var starNight;
var music;
var fairyIMG, starIMG, starNightIMG;

function preload() {
  //preload the images here
  fairyIMG = loadAnimation ('images/fairy1.png', 'images/fairy2.png');
  starIMG = loadAnimation ('images/star.png');
  starNightIMG = loadAnimation ('images/starnight.png');
  music = loadSound ('sound/JoyMusic.mp3');
}

function setup() {
  createCanvas(800, 650);
  
  starNight = createSprite(390,365,20,20);
  starNight.addAnimation("stars", starNightIMG);
  starNight.scale=0.4;
  fairy = createSprite(200,500,50,50);
  fairy.addAnimation("fairyFlying", fairyIMG);
  fairy.scale=0.125;
  star = createSprite(600,100,50,50);
  star.addAnimation("star", starIMG);
  star.scale=0.2;
  music.play();
}


function draw() {
  background("black");
  
  if (keyDown("LEFT_ARROW")){
    fairy.x=fairy.x-2;
  }

  if (keyDown("RIGHT_ARROW")){
    fairy.x=fairy.x+2;
  }

  if (keyDown("DOWN_ARROW")){
    star.velocityY=5;
  }
  
  if (star.y>470){
    star.velocityY=0;
  }

  drawSprites();
}
