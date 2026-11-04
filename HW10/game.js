var x = 168;
var y = 178;

var movex = 500;
var movey = 500;

var img;



function setup (){
createCanvas (400,400);
}
function draw(){
    background ('pink');

    noStroke ();
    textSize (12);
    fill(0)
    text("x" + mouseX +", y:" + mouseY, 25, 20)

    //mouseshape
    fill (150, 13, 3)
    rect(movex,movey,50)

    //player
    image(img,x,y,100,100)
    

    //Obstacle 1
    fill('red')
    rect (30,165,90,20)

    //Obstacle 2
    fill('orange')
    rect (176,256,160,30)

    //Exit
    fill('green')
    rect (0,387,400,15)

if (keyIsDown(68)){
    x += 10;
}
else if (keyIsDown (65)){
 x -= 10;
}
else if (keyIsDown (87)){
 y -= 10;
}
else if (keyIsDown (83)){
 y += 10;
}
if(x>0 && x<400 && y>385 && y<500){
    background(134, 191, 117)
    textSize(50)
    text ("You Win!", 77, 55)
}

}
function mouseClicked(){
    movex = mouseX
    movey = mouseY

}
function preload(){
        img = loadImage('Bill.png', 200,198);
    }