var lefteyex = 177;
var mylefteyemoves = 1;
var lefteyeballx = 177;
var mylefteyeballmoves = 1;
var leftglassesy = 198;
var myleftglassesmoves = 1;
var rightglassesy = 198;
var myrightglassesmoves = 1;
var headx = 200;
var heady = 200;
var myheadmoves = 1;
var righteyex = 222;
var myrighteyemoves = 1;
var righteyeballx = 222;
var myrighteyeballmoves = 1;
var textsize = 25;
var textmovement = 1;
var textcount = 0;


function setup() {
createCanvas (400,400);
mylefteyemoves = floor(random() * 15)+1
mylefteyeballmoves = floor(random() * 15)+1
myrighteyemoves = floor(random() * 15)+1
myrighteyeballmoves = floor(random() * 15)+1
myleftglassesmoves = floor(random() * 15)+1
myheadmoves = floor(random() * 15)+1
}

function draw (){
background(247, 166, 223);

fill(0);
noStroke();
textSize(12);
text("x;" + round(mouseX) + ", y:" + round(mouseY), 10, 20)

//title
fill(247, 27, 126);
stroke(186, 4, 131);
textSize(textsize);
text('My Self Portrait',120,40);
if(textcount >= 10){
    textcount = 0;
    textmovement *= -1;
}
textsize += textmovement
textcount += 1

//left ear
fill(252, 234, 207);
noStroke()
stroke(240, 199, 139);
circle(153,201,20);


//right ear
fill(252, 234, 207);
noStroke()
stroke(240, 199, 139);
circle(247,201,20);

//head
fill(252, 234, 207);
noStroke()
stroke(240, 199, 139);
ellipse(headx,heady,100,110);
if(headx >= 218 || headx <= 182 && heady >= 212 || heady <= 188){
    myheadmoves *= -1;
}
headx += myheadmoves
heady += myheadmoves

//hair
fill(83, 28, 94)
stroke(83, 28, 94)
ellipse(198,165,80,40)
triangle(147,199,160,164,158,203)
triangle(260,196,233,158,243,202)

//moles
fill(82, 54, 25)
point(210,215)
fill(82, 54, 25)
point(229,226)
fill(82, 54, 25)
point(186,225)
fill(82, 54, 25)
point(181,221)

//left eye
fill(300)
noStroke()
stroke(240, 199, 139)
ellipse (lefteyex,199,20,10)
if(lefteyex >= 204 || lefteyex <= 148 && lefteyeballx >= 204 || lefteyeballx <= 148 ){
mylefteyemoves *= -1;
mylefteyeballmoves *= -1;
}
 lefteyex += mylefteyemoves;
 lefteyeballx += mylefteyemoves;
//left eyeball
fill(0)
stroke(102, 138, 196)
strokeWeight(2)
circle (lefteyeballx,199,8)

//right eye
fill(300)
noStroke()
stroke(240, 199, 139)
ellipse (righteyex,199,20,10)
if (righteyex >= 246 || righteyex <= 192 && righteyeballx >= 246 || righteyeballx <= 192){
myrighteyemoves *= -1;
myrighteyeballmoves *= -1;
}
 righteyex += myrighteyemoves;
 righteyeballx += myrighteyemoves

//right eyeball
fill(0)
stroke(102, 138, 196)
strokeWeight(2)
circle (righteyeballx,199,8)

//left glasses
noFill()
stroke(247, 178, 237)
ellipse(177,leftglassesy,30,20)
if(leftglassesy <= 178 || leftglassesy >= 211 && rightglassesy <= 178 || rightglassesy >=211){
myleftglassesmoves *= -1;
myrightglassesmoves *= -1;
}
leftglassesy += myleftglassesmoves;
rightglassesy += myleftglassesmoves;
//right glasses
noFill()
stroke(247, 178, 237)
ellipse(222,rightglassesy,30,20)
//glassesbridge
line(192,197,207,197)

//nose ring
noFill()
stroke(177, 181, 181)
circle(200,218,6)

//nose
fill(252, 234, 207)
stroke(240, 199, 139)
triangle(195,217,199,206,204,217)

//mouth
stroke(0)
line(171,194,170,191)
stroke(0)
line(177,193,177,189)
stroke(0)
line(183,194,185,191)

//left eyelashes
stroke(0)
line(216,194,215,189)
stroke(0)
line(222,193,222,188)
stroke(0)
line(227,194,230,189)
//right eyelashes
stroke(212, 125, 167)
line(186,230,192,234)
stroke(212, 125, 167)
line(192,234,204,234)

//clothes
fill(40, 74, 40)
stroke(12, 56, 12)
rect(170,276,60,100)
//neck
fill(252, 234, 207)
stroke(240, 199, 139)
rect(191,254,15,25)


//sign
fill(0);
noStroke()
textSize(15);
textFont('Pacifico')
text('Iris Bruce',308,367);


}