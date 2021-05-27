var bgImg;
var cat,catImg1,catImg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;


function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3=loadAnimation("images/mouse4.png");
    bgImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseimg1);
    mouse.scale=0.15

    cat=createSprite(870,600);
    cat=addAnimation("catSleeping",catimg1);
    cat.scale=0.2;
   }

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImg",catimg3);
        cat.x= 300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImg");
        mouse.addAnimation("mouseLastImg",mouseimg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImg");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  
     cat.addAnimation("catRunning",catimg2);
     cat.changeAnimation("catRunning");
     cat.velocityX= -5;
  }



}


