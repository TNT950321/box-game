var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(random(20,750),random(20,600),50,50);
    block1.shapeColor = "blue";

    block2 = createSprite(random(20,750),random(20,600),50,50);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(random(20,750),random(20,600),50,50);
    block3.shapeColor = "yellow";

    block4 = createSprite(random(20,750),random(20,600),50,50);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=20
    ball.velocityY=20
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    //if (keyDown("left")) {
        //ball.x=ball.x-10
    //}
    //if (keyDown("right")) {
        //ball.x=ball.x+10
    //}
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        //block1.y=block1.y-5
        //block2.y=block2.y+5
    }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to stop music
        music.stop();
        //block2.y=block2.y-5
        //block1.y=block1.y+1
        //block3.y=block3.y+1
        //block4.y=block4.y+1
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        //block3.y=block3.y-5
        //block2.y=block2.y+5
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "red";
        //block4.y=block4.y-5
        //block2.y=block2.y+5
    }

       //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}

