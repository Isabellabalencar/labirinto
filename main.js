var fundo=createSprite(200,200)
fundo.setAnimation("background_landscape07_1")

var alien = createSprite(17,228,20,20)
alien.setAnimation("alien")

alien.scale=0.05


var parede1 = createSprite(5,100,10,200)

var parede2 = createSprite(5,340,10,155)

var parede3 = createSprite(200,395,400,10)

var parede4 = createSprite(200,5,400,10)

var parede5 = createSprite(395,5,10,1000)

var parede6 = createSprite(8,261,150,10)

var parede7 = createSprite(82,218,10,95)

var parede8 = createSprite(72,167,30,10)

var parede9 = createSprite(54,111,10,120)

var parede10 = createSprite(80,82,50,10)

var parede11 = createSprite(150,6,10,65)

var parede12 = createSprite(185,44,80,10)

var parede13 = createSprite(230,9,10,80)

var parede14 = createSprite(290,44,30,10)

var parede15 = createSprite(302,65,10,50)

var parede16 = createSprite(230,88,150,10)

var parede17 = createSprite(153,128,10,90)

var parede18 = createSprite(141,171,35,10)

var parede19 = createSprite(200, 125, 140, 10)

var parede20 = createSprite(204, 178, 10, 100)

var parede21 = createSprite(266, 145, 10, 50)

var parede22 = createSprite(170, 225, 75, 10)

var parede23 = createSprite(256, 170, 30, 10)

var parede24 = createSprite(240, 190, 10, 50)

var parede25 = createSprite(290, 219, 110, 10)

var parede26 = createSprite(130, 265, 10, 90)

var parede27 = createSprite(75, 310, 30, 10)

var parede28 = createSprite(57, 330, 10, 50)

var parede29 = createSprite(130, 350, 150, 10)

var parede30 = createSprite(201, 324, 10, 60)

var parede31 = createSprite(240, 299, 80, 10)

var parede32  = createSprite(280, 314, 10, 40)

var parede33 = createSprite(270, 335, 30, 10)

var parede34 = createSprite(250, 375, 10, 90)

var parede35 = createSprite(340,170 , 10, 260)

var parede36 = createSprite(330,295 , 30, 10)

var parede37 = createSprite(313,315 , 10, 50)

var parede38 = createSprite(325,338 , 30, 10)

 var parede39 = createSprite(342, 365, 10, 70);
  parede39.shapeColor = "red";

 var parede40 = createSprite(370, 150, 60, 10);
 
parede1.shapeColor= "black"
parede2.shapeColor= "black"
parede3.shapeColor= "black"
parede4.shapeColor= "black"
parede5.shapeColor= "black"
parede6.shapeColor= "black"
parede7.shapeColor= "black"
parede8.shapeColor= "black"
parede9.shapeColor= "black"
parede10.shapeColor= "black"
parede11.shapeColor= "black"
parede12.shapeColor= "black"
parede13.shapeColor= "black"
parede14.shapeColor= "black"
parede15.shapeColor= "black"
parede16.shapeColor= "black"
parede17.shapeColor= "black"
parede18.shapeColor= "black"
parede19.shapeColor= "black"
parede20.shapeColor= "black"
parede21.shapeColor= "black"
parede22.shapeColor= "black"
parede23.shapeColor= "black"
parede24.shapeColor= "black"
parede25.shapeColor= "black"
parede26.shapeColor= "black"
parede27.shapeColor= "black"
parede28.shapeColor= "black"
parede29.shapeColor= "black"
parede30.shapeColor= "black"
parede31.shapeColor= "black"
parede32.shapeColor= "black"
parede33.shapeColor= "black"
parede34.shapeColor= "black"
parede35.shapeColor= "black"
parede36.shapeColor= "black"
parede37.shapeColor= "black"
parede38.shapeColor= "black"
parede40.shapeColor= "black"
var sprite1 = createSprite(178, 110);
  sprite1.setAnimation("star");
  sprite1.scale=0.3
  
  var sprite2 = createSprite(268, 200);
  sprite2.setAnimation("star");
  sprite2.scale=0.3
    
  var sprite3 = createSprite(250, 320);
  sprite3.setAnimation("star");
  sprite3.scale=0.3
  
  var sprite4 = createSprite(75, 330);
  sprite4.setAnimation("star");
  sprite4.scale=0.3

var pontos=0


var coletar=createSprite(170,23,10,10)
coletar.setAnimation("star")
coletar.scale=0.3



var medalha=createSprite(367,200,10,10)
medalha.scale=0.7
medalha.setAnimation("medalha")


createEdgeSprites()
function draw() {

background("white")
drawSprites()

fill("white")
textSize(17)
text("4/"+pontos,190,29)

if(keyDown(UP_ARROW)){
alien.y = alien.y - 2
}

if(keyDown(DOWN_ARROW)){
alien.y = alien.y + 2
}

if(keyDown(RIGHT_ARROW)){
alien.x = alien.x + 2
}


if(keyDown(LEFT_ARROW)){
alien.x = alien.x - 2
}

if(keyDown("W")){
alien.y = alien.y - 2
}

if(keyDown("S")){
alien.y = alien.y + 2
}


if(keyDown("D")){
alien.x = alien.x + 2
}

if(keyDown("A")){
alien.x = alien.x - 2
}



alien.bounceOff(edges) 

if(alien.isTouching(sprite1)){
pontos=pontos +1
sprite1.destroy()
}

if(alien.isTouching(sprite2)){
pontos=pontos +1
sprite2.destroy()
}

if(alien.isTouching(sprite3)){
pontos=pontos +1
sprite3.destroy()
}

if(alien.isTouching(sprite4)){
pontos=pontos +1
sprite4.destroy()
}

if(pontos== 4){
parede39.destroy()}


if(alien.isTouching(parede1) ||
alien.isTouching(parede2) ||
alien.isTouching(parede3) ||
alien.isTouching(parede4) ||
alien.isTouching(parede5) ||
alien.isTouching(parede6) ||
alien.isTouching(parede7) ||
alien.isTouching(parede8) ||
alien.isTouching(parede9) ||
alien.isTouching(parede10) ||
alien.isTouching(parede11) ||
alien.isTouching(parede12) ||
alien.isTouching(parede13) ||
alien.isTouching(parede14) ||
alien.isTouching(parede15) ||
alien.isTouching(parede16) ||
alien.isTouching(parede17) ||
alien.isTouching(parede18) ||
alien.isTouching(parede19) ||
alien.isTouching(parede20) ||
alien.isTouching(parede21) ||
alien.isTouching(parede22) ||
alien.isTouching(parede23) ||
alien.isTouching(parede24) ||
alien.isTouching(parede25) ||
alien.isTouching(parede26) ||
alien.isTouching(parede27) ||
alien.isTouching(parede28) ||
alien.isTouching(parede29) ||
alien.isTouching(parede30) ||
alien.isTouching(parede31) ||
alien.isTouching(parede32) ||
alien.isTouching(parede33) ||
alien.isTouching(parede34) ||
alien.isTouching(parede35) ||
alien.isTouching(parede36) ||
alien.isTouching(parede37) ||
alien.isTouching(parede38) ||
alien.isTouching(parede39) ||
alien.isTouching(parede40)){
 
 alien.x=17 

 alien.y=228 
  
}

if(alien.isTouching(medalha)){
    textSize(15);
    fill("green");
    text("YOU WIN!", 200, 200);
}

}
