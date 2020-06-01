
var earth;
var sun;
var mercury;
var venus;
var image1,image2,image3,image4;
var frame = [sun];



 function preload(){
  image1 = loadImage("sun.png");
  image2 = loadImage("mercury.png");
  image3 = loadImage("venus.png");
  image4 = loadImage("earth.png");
 }



function setup() {
    createCanvas(600,600);
    sun = createSprite(300,300,50,50);
    sun.addImage("sun",image1);
    sun.scale =0.3;
    mercury = createSprite(150,380,50,50);
    mercury.addImage("mercury",image2);
    mercury.scale = 0.1;
    venus = createSprite(350,100,50,50);
    venus.addImage("venus",image3);
    venus.scale = 0.1;
    earth = createSprite(450,300,50,50);
    earth.addImage("earth",image4);
    earth.scale = 0.1;
    
}

function draw() {
  background(0);
  strokeWeight(4);
  sun.display();
  earth.display();
  venus.display();
  mercury.display();
  text("Press mouse Over Sun",200,400);
  stroke(255);


  if(sun.isTouching(mercury)){
    mercury.destroy();
  }
  if(sun.isTouching(venus)){
    venus.destroy();
  }
  if(sun.isTouching(earth)){
    earth.destroy();
  }

  if(mousePressedOver(sun)){
    sun.scale++
  }

}


