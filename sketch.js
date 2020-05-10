
var earth;
var sun;
var mercury;
var jupiter;
var neptune;
var mars;
var saturn;
var uranus;
var venus;
var world;

 
function setup() {
    createCanvas(1200, 1200);
    

    sun = createSprite(150,300,50,50);
    mercury = createSprite(250,300,50,50);
    venus = createSprite(350,300,50,50);

    earth = createSprite(450,300,50,50);
    mars = createSprite(550,300,50,50);
    jupiter = createSprite(650,300,50,50);

    saturn = createSprite(750,300,50,50);
    uranus = createSprite(850,300,50,50);
    neptune = createSprite(950,300,50,50);

}

function draw() {
  background(0);
  strokeWeight(4);


  text("Sun",130,260);
  textSize(10);
  text("Mercury",230,260);
  textSize(10);
  text("Venus",330,260);
  textSize(10);
  text("Earth",440,260);
  textSize(10);
  text("Mars",540,260);
  textSize(10);
  text("Jupiter",630,260);
  textSize(10);
  text("Saturn",730,260);
  textSize(10);
  text("Uranus",830,260);
  textSize(10);
  text("Neptune",930,260);
  textSize(10);
 

  
  drawSprites();
}