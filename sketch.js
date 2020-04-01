var bg, bgImg;
var b1, b2, b3, b4, b5, b6, b7, b8;
var ground, groundImg;
var moon, moonImg;
var mission, mission2, missionImg;
var target, targetImg;
var ufo, ufoImg;
var fire, fireImg;
var invisible, invisible2;
var comet, comet2, comet3, cometImg;
var gameState = "Start";
var score;
var won, wonImg;
var count;
var sound1, sound2, sound3, sound4,sound5;
var wall, wall1;
var again, againImg;
var space, spaceImg;
var space2, spaceImg;
var click, clickImg;
var quote, quoteImg;
var lev2, lev2Img;
var party, partyImg;
var party2, party2Img;
var bg2, bg2Img;
var earth, earthImg;
var mars, marsImg;
var chand, chandImg;
var chand2, chand2Img;
var chand3, chand3Img;
var chand4, chand4Img;
var ast1, ast2, ast3, ast4, ast5, astImg;
var fire2, fire2Img;
var sound1, sound2, sound3, sound4,sound5, sound6, sound7, sound8, sound9, sound10, sound11;
var flag, flagImg;
var fail, failImg;
var line, lineImg;
var logo, logoImg;
var pic, picImg;
var step, stepImg;
var bg, bgImg;
var bheam, bheamImg;
var gameOver, restart;
var score;
var laddooGroup, laddoImage;
var playerGroup, playerImage;
var Jelly1, Jelly2, Jelly3, Jelly4, Jelly5, Jelly6;
var witch, witch2, witchImg;
var st, stImg;
var sp, spImg;
var bg9, bg9Img;
var man, manImg;
var fuel, fuelImg;


function preload(){
  bgImg = loadImage("bg8.jpg");
  moonImg = loadImage("moon.png");
  b1Img = loadImage("Build 1.png");
  b2Img = loadImage("Build 5.png");
  b3Img = loadImage("Build 4.png");
  b4Img = loadImage("Build 1.png");
  b5Img = loadImage("Build 4.png");
  b6Img = loadImage("Build 5.png");
  b7Img = loadImage("Build 4.png");
  b8Img = loadImage("Build 5.png");
  missionImg = loadImage("tank2.png");
  targetImg = loadImage("t1.png");
  ufoImg = loadImage("mission.png");
  fireImg = loadImage("Fire 2.png");
  cometImg = loadImage("comet 3.png");  
  wall = loadImage("w2.jpg");
  againImg = loadImage("again.png");
  spaceImg = loadImage("space.png");
  clickImg = loadImage("click.png");
  quoteImg = loadImage("quote.webp");
  lev2Img = loadImage("level2.png");
  partyImg = loadImage("party.png");
  party2Img = loadImage("party2.png");
  bg2Img = loadImage("bg1.jpg");
  failImg = loadImage("fail.png");
  stepImg = loadImage("Stepss.jpg");

  bg2Img = loadImage("bg1.jpg");
    laddoImage = loadImage("bullet.png");
    playerImage = loadImage("bullet.png");
    bheamImg = loadImage("top.png");
    Jelly1Img = loadImage("top2.png");
    Jelly2Img = loadImage("top2.png");
    Jelly3Img = loadImage("top2.png");
    Jelly4Img = loadImage("top2.png");
    Jelly5Img = loadImage("top2.png");
    Jelly6Img = loadImage("top2.png");
    Jelly8Img = loadImage("top2.png");
    Jelly9Img = loadImage("top2.png");
    Jelly10Img = loadImage("top2.png");
    Jelly11Img = loadImage("top2.png");
    Jelly12Img = loadImage("top2.png");
    Jelly13Img = loadImage("top2.png");
    Jelly14Img = loadImage("top2.png");
    Jelly15Img = loadImage("top2.png");
    Jelly16Img = loadImage("top2.png");
    Jelly17Img = loadImage("top2.png");
    Jelly18Img = loadImage("top2.png");
    Jelly19Img = loadImage("top2.png");
    Jelly20Img = loadImage("top2.png");
    Jelly21Img = loadImage("top2.png");
    Jelly22Img = loadImage("top2.png");
    Jelly23Img = loadImage("top2.png");
    Jelly24Img = loadImage("top2.png");
    Jelly25Img = loadImage("top2.png");
    Jelly26Img = loadImage("top2.png");
    witchImg = loadImage("bullet2.png");
    stImg = loadImage("st.jpg");
    wonImg = loadImage("won.png");
    spImg = loadImage("sp2.png");
    bg9Img = loadImage("bg2.jpg");
    manImg = loadImage("man.png");
    fuelImg = loadImage("fuel2.jpg");

  sound1 = loadSound ("6.mp3");
  sound3 = loadSound ("5.mp3");
  sound5 = loadSound("5.mp3");
  sound6 = loadSound("india.mp3");
  sound7 = loadSound ("6.mp3");
  sound9 = loadSound ("5.mp3");
  sound11 = loadSound("1.mp3");
  
}

function setup() {

 var canvas = createCanvas (windowWidth, windowHeight);

    wall1 = createSprite(width-800,height-200,10,10);
    wall1.addImage(wall);
    wall1.scale = 3.0;

    bg = createSprite(width-800,height-200,10,10);
    bg.addImage(bgImg);
    bg.scale = 3.5;   
    bg.visible = false;

    bg9 = createSprite(width-800,height-200,10,10);
    bg9.addImage(bg9Img);
    bg9.scale = 1.3;   
    bg9.visible = false;
    
    moon = createSprite(1300,150);
    moon.addImage(moonImg);
    moon.scale = 0.06;
    moon.visible = false;
    
    b1 = createSprite(100,height-50,10,10);
    b1.addImage(b1Img);
    b1.scale = 0.3;
    b1.visible = false;

    b2 = createSprite(280,height-50,10,10);
    b2.addImage(b2Img);
    b2.scale = 0.2;
    b2.visible = false;

    b3 = createSprite(420,height-50,10,10);
    b3.addImage(b3Img);
    b3.scale = 0.5;
    b3.visible = false;

    b4 = createSprite(1100,height-50,10,10);
    b4.addImage(b4Img);
    b4.scale = 0.3;
    b4.visible = false;

    b5 = createSprite(950,height-50,10,10);
    b5.addImage(b5Img);
    b5.scale = 0.5;
    b5.visible = false;

    b6 = createSprite(820,height-50,10,10);
    b6.addImage(b6Img);
    b6.scale = 0.2;
    b6.visible = false;

    b7 = createSprite(1250,height-50,10,10);
    b7.addImage(b7Img);
    b7.scale = 0.5;
    b7.visible = false;

    b8 = createSprite(1390,height-50,10,10);
    b8.addImage(b8Img);
    b8.scale = 0.2;
    b8.visible = false;

    mission = createSprite(600,height-30,10,10);
    mission.addImage(missionImg);
    mission.scale = 0.08;
    mission.visible = false;

    ufo = createSprite(300,100,10,10);
    ufo.addImage(ufoImg);
    ufo.scale = 0.15;
    ufo.visible = false;

    ufo1 = createSprite(700,100,10,10);
    ufo1.addImage(ufoImg);
    ufo1.scale = 0.2;
    ufo1.visible = false;

    ufo2 = createSprite(1100,100,10,10);
    ufo2.addImage(ufoImg);
    ufo2.scale = 0.15;
    ufo2.visible = false;

    invisible = createSprite(2,700,2,100);
    invisible.visible = false;
    invisible.shapeColor = "red";

    invisible2= createSprite(1480,700,5,100);
    invisible2.visible = false;
    
    comet = createSprite(200, 0);
    comet.addImage(cometImg);
    comet.scale = 0.4;
    comet.velocityY = 7.0;
    comet.visible = false;

    again = createSprite(700,300,10,10);
    again.addImage(againImg);
    again.scale = 0.7;
    again.visible = false;

    step = createSprite(740,500,10,10);
    step.addImage(stepImg);
    step.scale = 0.46;
    step.visible = false;

    st = createSprite(700,150,10,10);
    st.addImage(stImg);
    st.scale = 0.46;
    st.visible = false;

    space = createSprite(1200,100,10,10);
    space.addImage(spaceImg);
    space.scale = 0.4;

    space2 = createSprite(280,100,10,10);
    space2.addImage(spaceImg);
    space2.scale = 0.4;

    click = createSprite(1400,700,10,10);
    click.addImage(clickImg);
    click.scale = 0.5;

    quote = createSprite(700,400,10,10);
    quote.addImage(quoteImg);
    quote.scale = 0.5;
    quote.visible = false;

    lev2 = createSprite(1100,200,10,10);
    lev2.addImage(lev2Img);
    lev2.scale = 0.4;
    lev2.visible = false;

    party = createSprite(300,200,10,10);
    party.addImage(partyImg);
    party.visible = false;
    party.scale = 0.5;

    party2 = createSprite(1200,400,10,10);
    party2.addImage(party2Img);
    party2.visible = false;
    party2.scale = 0.5;
  
    targetGroup = createGroup();

    score = 0;

    wallGroup =  new Group();
  
     bg2 = createSprite(width-800,height-400,10,10);
     bg2.addImage(bg2Img);
     bg2.scale = 1.5;
     bg2.visible = false;




  fail = createSprite(700,600,10,10);
  fail.addImage(failImg);
  fail.visible = false;

    bheam = createSprite(700, 700);
    bheam.addImage(bheamImg);
    bheam.scale = 0.25;
    bheam.visible = false;

    man = createSprite(700, 600);
    man.addImage(manImg);
    man.scale = 0.35;
    man.visible = false;

    witch = createSprite(200, 0);
    witch.addImage(witchImg);
    witch.scale = 0.1;
    witch.velocityY = 10.0;
    witch.visible = false;

    witch2 = createSprite(200, 0);
    witch2.addImage(witchImg);
    witch2.scale = 0.1;
    witch2.velocityY = 14.0;
    witch2.visible = false;

    laddooGroup = createGroup();
    laddooGroup.visible = false;

    playerGroup = createGroup();
    playerGroup.visible = false;

    Jelly1 = createSprite(200,50,10,10);
    Jelly1.addImage(Jelly1Img);
    Jelly1.scale = 0.1;
    Jelly1.visible = false;

    Jelly2 = createSprite(1000,50,10,10);
    Jelly2.addImage(Jelly2Img);
    Jelly2.scale = 0.1;
    Jelly2.visible = false;

    Jelly3 = createSprite(800,150,10,10);
    Jelly3.addImage(Jelly3Img);
    Jelly3.scale = 0.1;
    Jelly3.visible = false;

    Jelly4 = createSprite(700,50,10,10);
    Jelly4.addImage(Jelly4Img);
    Jelly4.scale = 0.1;
    Jelly4.visible = false;

    Jelly5 = createSprite(200,300,10,10);
    Jelly5.addImage(Jelly5Img);
    Jelly5.scale = 0.1;
    Jelly5.visible = false;

    Jelly6 = createSprite(1200,150,10,10);
    Jelly6.addImage(Jelly6Img);
    Jelly6.scale = 0.1;
    Jelly6.visible = false;


    Jelly8 = createSprite(800,150,10,10);
    Jelly8.addImage(Jelly1Img);
    Jelly8.scale = 0.1;
    Jelly8.visible = false;

    Jelly9 = createSprite(1200,150,10,10);
    Jelly9.addImage(Jelly4Img);
    Jelly9.scale = 0.1;
    Jelly9.visible = false;

    Jelly10 = createSprite(400,150,10,10);
    Jelly10.addImage(Jelly6Img);
    Jelly10.scale = 0.1;
    Jelly10.visible = false;

    Jelly11 = createSprite(600,170,10,10);
    Jelly11.addImage(Jelly5Img);
    Jelly11.scale = 0.1;
    Jelly11.visible = false;

    Jelly12 = createSprite(200,300,10,10);
    Jelly12.addImage(Jelly2Img);
    Jelly12.scale = 0.1;
    Jelly12.visible = false;

    Jelly13 = createSprite(1100,350,10,10);
    Jelly13.addImage(Jelly3Img);
    Jelly13.scale = 0.1;
    Jelly13.visible = false;

    Jelly14 = createSprite(400,350,10,10);
    Jelly14.addImage(Jelly5Img);
    Jelly14.scale = 0.1;
    Jelly14.visible = false;

    Jelly15 = createSprite(1200,250,10,10);
    Jelly15.addImage(Jelly4Img);
    Jelly15.scale = 0.1;
    Jelly15.visible = false;
          
    Jelly16 = createSprite(1000,250,10,10);
    Jelly16.addImage(Jelly6Img);
    Jelly16.scale = 0.1;
    Jelly16.visible = false;
          
    Jelly17 = createSprite(100,150,10,10);
    Jelly17.addImage(Jelly1Img);
    Jelly17.scale = 0.1;
    Jelly17.visible = false;
          
    Jelly18 = createSprite(800,250,10,10);
    Jelly18.addImage(Jelly2Img);
    Jelly18.scale = 0.1;
    Jelly18.visible = false;
          
    Jelly19 = createSprite(800,350,10,10);
    Jelly19.addImage(Jelly5Img);
    Jelly19.scale = 0.1;
    Jelly19.visible = false;
          
    Jelly20 = createSprite(600,350,10,10);
    Jelly20.addImage(Jelly4Img);
    Jelly20.scale = 0.1;
    Jelly20.visible = false;
          
    Jelly21 = createSprite(400,250,10,10);
    Jelly21.addImage(Jelly21Img);
    Jelly21.scale = 0.1;
    Jelly21.visible = false;

    Jelly22 = createSprite(1500,250,10,10);
    Jelly22.addImage(Jelly22Img);
    Jelly22.scale = 0.1;
    Jelly22.visible = false;

    Jelly23 = createSprite(1200,100,10,10);
    Jelly23.addImage(Jelly23Img);
    Jelly23.scale = 0.1;
    Jelly23.visible = false;

    Jelly24 = createSprite(1100,200,10,10);
    Jelly24.addImage(Jelly24Img);
    Jelly24.scale = 0.1;
    Jelly24.visible = false;

    Jelly25 = createSprite(600,100,10,10);
    Jelly25.addImage(Jelly25Img);
    Jelly25.scale = 0.1;
    Jelly25.visible = false;

    Jelly26 = createSprite(200,300,10,10);
    Jelly26.addImage(Jelly26Img);
    Jelly26.scale = 0.1;
    Jelly26.visible = false;

    won = createSprite(600,200,10,10);
    won.addImage(wonImg);
    won.visible = false;

    sp = createSprite(880,40,10,10);
    sp.addImage(spImg);
    sp.visible = true;
    sp.scale = 0.065;

    sp2 = createSprite(600,40,10,10);
    sp2.addImage(spImg);
    sp2.visible = true;
    sp2.scale = 0.065;

    fuel = createSprite(700,100,10,10);
    fuel.addImage(fuelImg);
    fuel.visible = false;
    fuel.scale = 0.4;

       
    score = 0;
    count = 0;
  
} 


function draw() {
  background("blue");
 
 if ( mousePressedOver(click)){
   step.visible = true;
   
 }

 if (mousePressedOver(step)){
   gameState = "play";
   step.visible = false;
 }


  if (gameState === "play"){
    
   
    bg.visible = true;
    moon.visible = true;
    b1.visible = true;
    b2.visible = true;
    b3.visible = true;
    b4.visible = true;
    b5.visible = true;
    b6.visible = true;
    b7.visible = true;
    b8.visible = true;
    mission.visible = true;
    ufo.visible = true;
    ufo2.visible = true;
    ufo1.visible = true;
    invisible.visible = false;
    invisible2.visible = false;
    comet.visible = true;
    again.visible = false;
   space.visible = false;
   space2.visible = false;
  click.visible = false;
  quote.visible = false;
  lev2.visible = false;
  party.visible = false;
  party2.visible = false;
  bg2.visible = false;

wall1.visible = false;
sp2.visible = false;
sp.visible = false;


 if(keyWentDown("RIGHT_ARROW")){
   mission.velocityX =20;
   mission.velocityY =0;
  }
 if (keyWentDown("LEFT_ARROW")){
  mission.velocityX =-20;
   mission.velocityY =0;
 }
 if(keyWentUp("RIGHT_ARROW")){
  mission.velocityX =0;
  mission.velocityY =0;
 }
if (keyWentUp("LEFT_ARROW")){
 mission.velocityX =0;
  mission.velocityY =0;
}

if (keyWentDown("space")) {
  createSatellite(mission);
  sound3.play();
}


if (mission.isTouching(invisible)){
  mission.x = 300;
}

if (mission.isTouching(invisible2)){
  mission.x = 1300;
}

if (targetGroup.isTouching(comet)) {
  if (frameCount % 10 === 0) {
     comet.destroy();
      comet = createSprite(Math.round(random(50, 1350), Math.round(random(-400, 0))));
      comet.addImage(cometImg);
      comet.scale = 0.4;
      comet.velocityY = 7.0;
      score = score + 200;
      sound5.play();
  }
}

 
if (comet.y > height-30) {
  comet.x = Math.round(random(50, 1350));
  comet.y = 0;
}
if (comet.isTouching(b1)){
  b1.addImage(fireImg);
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b2)){
  b2.addImage(fireImg);
  sound1.play(); 
  gameState = "over"; 
}
if (comet.isTouching(b3)){
  b3.addImage(fireImg);
  sound1.play(); 
  gameState = "over"; 
}
if (comet.isTouching(b4)){
  b4.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b5)){
  b5.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b6)){
  b6.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b7)){
  b7.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b8)){
  b8.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
}


  if (gameState === "over"){
    comet.destroy();
    targetGroup.setVelocityXEach(0);
    invisible.visible = false;
    invisible2.visible = false;
  mission.visible = false;
  wall1.visible = false;
 ufo.visible = false;
 ufo1.visible = false;
 ufo2.visible = false;
  again.visible = true;
  quote.visible = false;
  lev2.visible = false;
  bg2.visible = false;
fail.visible = false;


  }


 if(score === 10000){
    mission.visible = false;
  moon.visible = false; 
  ufo.visible = false;
  ufo1.visible = false;
   ufo2.visible = false;
   wall1.visible = false;
   targetGroup.destroyEach();
   comet.destroy();
   b1.visible = false;
   b2.visible = false;
   b3.visible = false;
   b4.visible = false;
   b5.visible = false;
   b6.visible = false;
   b7.visible = false;
   b8.visible = false;
   quote.visible = true;
   lev2.visible = true;
   party.visible = true;
   party2.visible = true;
   bg2.visible = false;
fail.visible = false;


  }
if (mousePressedOver(lev2)){
st.visible = true;
quote.destroy();
party.destroy();
party2.destroy();
sp.destroy();
sp2.destroy();
 
 
}
if (mousePressedOver(st)){
  gameState = "serve";
  st.visible = false;
}
if (gameState === "serve"){
  
  Jelly1.visible = true;
  Jelly2.visible = true;
  Jelly3.visible = true;
  Jelly4.visible = true;
  Jelly5.visible = true;
  Jelly8.visible = true;
  Jelly6.visible = true;
  Jelly9.visible = true;
  Jelly10.visible = true;
  Jelly11.visible = true;
  Jelly12.visible = true;
  Jelly13.visible = true;
  Jelly14.visible = true;
  Jelly15.visible = true;
  Jelly16.visible = true;
  Jelly17.visible = true;
  Jelly18.visible = true;
  Jelly19.visible = true;
  Jelly20.visible = true;
  Jelly21.visible = true;
  witch.visible = true;
  witch2.visible = true;
  bg2.visible = true;
  bheam.visible = true;
  wall1.visible = false;
  party.visible = false;
  party2.visible = false;
  quote.visible = false;
  lev2.visible = false;
  wall1.visible = false;
quote.visible = false;
lev2.visible = false;
party.visible = false;
party2.visible = false;
sp.visible = false;
sp2.visible = false;


if(keyWentDown("RIGHT_ARROW")){
  bheam.velocityX =20;
  bheam.velocityY =0;
 }
if (keyWentDown("LEFT_ARROW")){
 bheam.velocityX =-20;
  bheam.velocityY =0;
}
if(keyWentUp("RIGHT_ARROW")){
 bheam.velocityX =0;
 bheam.velocityY =0;
}
if (keyWentUp("LEFT_ARROW")){
bheam.velocityX =0;
 bheam.velocityY =0;
}
  if (keyWentDown("enter")) {
    createBullet(bheam.x);
}
if(keyWentDown("RIGHT_ARROW")){
  man.velocityX =10;
  man.velocityY =0;
 }
if (keyWentDown("LEFT_ARROW")){
 man.velocityX =-10;
  man.velocityY =0;
}
if(keyWentUp("RIGHT_ARROW")){
 man.velocityX =0;
 man.velocityY =0;
}
if (keyWentUp("LEFT_ARROW")){
man.velocityX =0;
 man.velocityY =0;
}
if (keyWentDown("enter")) {
  goBullet(man.x);
}

if (bheam.isTouching(invisible)){
  bheam.x = 300;
}

if (bheam.isTouching(invisible2)){
  bheam.x = 1300;
}
if (laddooGroup.isTouching(witch)) {
  if (frameCount % 10 === 0) {
     witch.destroy();
      witch = createSprite(Math.round(random(200, 1000),));
      witch.addImage(witchImg);
      witch.scale = 0.1;
      witch.velocityY = 10.0;
      sound5.play();
  }
}

 
if (witch.y > height-30) {
  witch.x = Math.round(random(200, 1000));
  witch.y = 0;
}
if (laddooGroup.isTouching(witch)) {
  if (frameCount % 10 === 0) {
     witch2.destroy();
      witch2 = createSprite(Math.round(random(100, 1300),));
      witch2.addImage(witchImg);
      witch2.scale = 0.1;
      witch2.velocityY = 14.0;
      sound5.play();
  }
}

 
if (witch2.y > height-30) {
  witch2.x = Math.round(random(100, 1300));
  witch2.y = 0;
}

if (laddooGroup.isTouching(Jelly1)){
    Jelly1.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly2)){
    Jelly2.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly3)){
    Jelly3.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly4)){
    Jelly4.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly5)){
    Jelly5.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly6)){
    Jelly6.destroy();
    count =  count +20;
}

if (laddooGroup.isTouching(Jelly8)){
    Jelly8.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly9)){
    Jelly9.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly10)){
    Jelly10.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly11)){
    Jelly11.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly12)){
    Jelly12.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly13)){
    Jelly13.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly14)){
    Jelly14.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly15)){
    Jelly15.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly16)){
    Jelly16.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly17)){
    Jelly17.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly18)){
    Jelly18.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly19)){
    Jelly19.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly20)){
    Jelly20.destroy();
    count =  count +20;
}
if (laddooGroup.isTouching(Jelly21)){
    Jelly21.destroy();
    count =  count +20;
}


if (playerGroup.isTouching(Jelly1)){
  Jelly1.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly2)){
  Jelly2.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly3)){
  Jelly3.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly4)){
  Jelly4.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly5)){
  Jelly5.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly6)){
  Jelly6.destroy();
  count =  count +20;
}

if (playerGroup.isTouching(Jelly8)){
  Jelly8.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly9)){
  Jelly9.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly10)){
  Jelly10.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly11)){
  Jelly11.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly12)){
  Jelly12.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly13)){
  Jelly13.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly14)){
  Jelly14.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly15)){
  Jelly15.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly16)){
  Jelly16.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly17)){
  Jelly17.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly18)){
  Jelly18.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly19)){
  Jelly19.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly20)){
  Jelly20.destroy();
  count =  count +20;
}
if (playerGroup.isTouching(Jelly21)){
  Jelly21.destroy();
  count =  count +20;
}


}
if (witch.isTouching(bheam)) {
  bg2.visible = true;
fail.visible = true;
  witch.destroy();
  laddooGroup.setVelocityXEach(0);
  bheam.destroy();
  party2.visible = false;
  party.visible = false;
  quote.visible = false;
  lev2.destroy();
bg.visible = false;
score = 0;
  
}
if (witch2.isTouching(bheam)) {
  bg2.visible = true;
fail.visible = true;
  witch.destroy();
  laddooGroup.destroyEach();
  playerGroup.destroyEach();
  bheam.destroy();
  party2.visible = false;
  party.visible = false;
  quote.visible = false;
  lev2.destroy();
bg.visible = false;
score = 0;
  
}
if (count === 400){
  bheam.visible = true;
  won.visible = true;
  laddooGroup.destroyEach();
  witch.destroy();
  witch2.destroy();
  sp.visible = false;
  sp2.visible = false;
  fail.destroy();


}
if (count <= 280){
  playerGroup.destroyEach();
}
if (count === 300){
  fuel.visible = true;
  playerGroup.destroyEach();
  witch.destroy();
  witch2.destroy();
}
if (count >= 320){
  bg9.visible = true;
  bg2.visible = false;
  click.visible = false;
  space.visible = false;
  space2.visible = false;
  witch.destroy();
  witch2.destroy();
  laddooGroup.destroyEach();
  bheam.visible = false;
  man.visible = true;
  fuel.visible = false;
 
}





drawSprites();
fill(rgb(81,5,147));
textSize(23);
text("HIGH SCORE: 10000",1100,40);

fill(rgb(79,26,130));
textSize(23);
text("Score: " + score, 130, 30);

fill("black");
textSize(30);
text("Score: " + count, 820,40);
  
}



function createSatellite() {
  var satellite = createSprite(100, 100, 5, 10);
  satellite.addImage(targetImg);
  satellite.y = 600;
  satellite.scale = 0.08;
  satellite.x = mission.x;
  satellite.velocityY = -5;
  satellite.lifetime = 1000;
  targetGroup.add(satellite);
}

function createBullet(x) {
  party2.visible = false;
  party.visible = false;
  quote.visible = false;
  lev2.visible = false;
  var bullet = createSprite(100, 100, 5, 10);
  bullet.addImage(laddoImage);
  bullet.y = 360;
  bullet.scale = 0.2;
  bullet.x = x;
  bullet.velocityY = -5;
  bullet.scale = 0.09;
  bullet.lifetime = 1000;
  laddooGroup.add(bullet);
}
function goBullet(x) {
  party2.visible = false;
  party.visible = false;
  quote.visible = false;
  lev2.visible = false;
  var bullet2 = createSprite(100, 100, 5, 10);
  bullet2.addImage(laddoImage);
  bullet2.y = 360;
  bullet2.scale = 0.2;
  bullet2.x = x;
  bullet2.velocityY = -5;
  bullet2.scale = 0.09;
  bullet2.lifetime = 1000;
  playerGroup.add(bullet2);
}

