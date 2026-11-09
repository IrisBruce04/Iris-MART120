var x = 168;
var y = 178;

var x1 = 30;
var y1 = 165;
var moves1 = 1;

var x2 = 176;
var y2 = 256;
var moves2 = 1;


var movex = 500;
var movey = 500;




function setup (){
createCanvas (400,400);
moves1 = floor(random() * 15)+1
moves2 = floor(random() * 15)+1
}
function draw(){
    background ('pink');
    
    noStroke ();
    textSize (12);
    fill(0)
    text("x" + mouseX +", y:" + mouseY, 25, 20)

   clickshape();
    player();
    createobstcacle1();
    moveobstacle1();
    createobstacle2();
    moveobstacle2();
    exit();
    border();

}
    function border(){
    fill('purple')
    rect (1,-1,400,15)
    rect (1,-1,15,388)
    rect (388,-1,15,388)
   }
    //mouseshape
   function mouseClicked(){
    movex = mouseX
    movey = mouseY
   }
    function clickshape(){
   fill (150, 13, 3)
    rect(movex,movey,50)
    }

    //player
    function player(){
        fill('purple');
        stroke('blue');
        circle(x,y,30);
        
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
    }

    //Obstacle 1
    function createobstcacle1(){
    fill('red')
    stroke('orange')
    rect (x1,y1,90,20)
    }
    function moveobstacle1(){
if (x1 >= 400 || x1 <= 0 && y1 >= 400 || y1 <= 0){
 moves1 *= -1;
}
x1 += moves1
y1 += moves1
    }

    //Obstacle 2
    function createobstacle2(){
    fill('orange')
    stroke('red')
    rect (x2,y2,160,30)
    }
    function moveobstacle2(){
if (x2 >= 400 || x2 <= 0 && y2 >= 400 || y2 <= 0){
 moves2 *= -1;
}
x2 += moves2
y2 += moves2

    }

    //Exit
    function exit(){
    fill('green')
      stroke('yellow')
    rect (0,387,400,15)

    if(x>0 && x<400 && y>385 && y<500){
    background(134, 191, 117)
    textSize(50)
    text ("You Win!", 77, 55)
    }
    }

