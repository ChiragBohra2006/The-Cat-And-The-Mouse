var cat, cat1, cat2, cat3, cat4;
var mouse, mouse1, mouse2, mouse3, mouse4;
var bg, bgImage;


function preload() {
    
    bgImage = loadImage("Images/garden.png");

    cat1 = loadAnimation("Images/cat1.png");
    cat2 = loadAnimation("Images/cat2.png", "Images/cat3.png");
    cat3 = loadAnimation("Images/cat4.png");

    
    mouse1 = loadAnimation("Images/mouse1.png");
    mouse2 = loadAnimation("Images/mouse2.png", "Images/mouse3.png");
    mouse3 = loadAnimation("Images/mouse4.png")
   

}

function setup(){
    createCanvas(1000,800);
 
    cat = createSprite(820, 630);
    cat.addAnimation("cat",cat1);
    cat.scale = 0.225;

    mouse = createSprite(100, 630);
    mouse.addAnimation("mouse", mouse1);
    mouse.scale = 0.225;
  
cat.debug = true;
mouse.debug = true;

    cat.setCollider("rectangle", -40,70,1250,700)
    mouse.setCollider("rectangle", 0,0,700,700)

}

function draw() {


    background(bgImage);
    
    keyPressed();
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        mouse.velocityX = 0;
        cat.velocityX = 0;
        
        cat.addAnimation("cat3", cat3);
        cat.changeAnimation("cat3", cat3);

        mouse.addAnimation("mouse3", mouse3);
        mouse.changeAnimation("mouse3", mouse3)

        cat.x = 250;
       }
 
       

drawSprites();



}


 function keyPressed(){

    if(keyCode === LEFT_ARROW)
    {
     keyCode = RIGHT_ARROW
        mouse.addAnimation("mouseT", mouse2);
        mouse.changeAnimation("mouseT");
        mouse.frameDelay = 25;

        cat.addAnimation("cat Running", cat2);
        cat.changeAnimation("cat Running");
        cat.frameDelay = 3;
        cat.velocityX = -5;
    
    }
}