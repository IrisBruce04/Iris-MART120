function setup() {
createCanvas (400,400);
}

function draw (){
background(247, 166, 223);

fill(0);
noStroke();
textSize(12);
text("x;" + round(mouseX) + ", y:" + round(mouseY), 10, 20)

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
ellipse(200,200,100,110);

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
ellipse (177,199,20,10)
//left eyeball
fill(0)
stroke(102, 138, 196)
strokeWeight(2)
circle (177,199,8)

//right eye
fill(300)
noStroke()
stroke(240, 199, 139)
ellipse (222,199,20,10)
//right eyeball
fill(0)
stroke(102, 138, 196)
strokeWeight(2)
circle (222,199,8)

//left glasses
noFill()
stroke(247, 178, 237)
ellipse(177,198,30,20)
//right glasses
noFill()
stroke(247, 178, 237)
ellipse(222,198,30,20)
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

//title
fill(247, 27, 126);
stroke(186, 4, 131);
textSize(25);
text('My Self Portrait',120,40);

//sign
fill(0);
noStroke()
textSize(15);
textFont('Pacifico')
text('Iris Bruce',308,367);


}