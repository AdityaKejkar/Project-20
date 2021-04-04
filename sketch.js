var cat ,catImg1 , catImg2 , catImg3
var mouse , mouseImg1 ,mouseImg2 ,mouseImg3
var background, backgroundImg
function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    catImg2=loadAnimation("images/cat2.png", "images/cat3.png")
    mouseImg2=loadAnimation("images/mouse2.png", "images/mouse3.png")
    catImg3=loadImage("images/cat4.png")
    mouseImg3=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  

   cat=createSprite(870, 600)
   cat.addAnimation("still",catImg1)
   cat.scale=0.2

   mouse=createSprite(200,600)
   mouse.addAnimation("cheese", mouseImg1)
   mouse.scale=0.15
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25

    cat.addAnimation("catRunning", catImg2)
    cat.changeAnimation("catRunning")
    cat.velocityX=-1
}
}