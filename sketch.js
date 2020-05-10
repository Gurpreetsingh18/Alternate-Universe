
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
    

    sun = createSprite(600,500,50,50);
    mercury = createSprite(660,500,50,50);
    venus = createSprite(670,500,50,50);

    earth = createSprite(390,500,50,50);
    mars = createSprite(460,500,50,50);
    jupiter = createSprite(510,500,50,50);

    saturn = createSprite(560,500,50,50);
    uranus = createSprite(610,500,50,50);
    neptune = createSprite(660,500,50,50);

}

function draw() {
  background(0);
  strokeWeight(4);

  
  drawSprites();
}