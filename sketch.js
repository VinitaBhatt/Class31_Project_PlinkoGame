const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;
var division = [];
var plinko = [];
var particle = [];
function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,590,480,20); 

  for(var i=0; i<=width; i=i+80){
    division.push(new Division(i,500,10,200));
  }
  
  for(var i=40; i<=width;i=i+50){
    plinko.push(new Plinko(i,100));
  }

  for(var i=15; i<width; i=i+50){
    plinko.push(new Plinko(i,150));
  }

  for(var i=40; i<=width;i=i+50){
    plinko.push(new Plinko(i,200));
  }

  for(var i=15; i<width; i=i+50){
    plinko.push(new Plinko(i,250));
  }

  
}

function draw() {
  Engine.update(engine);
  background("orange");  
  ground.display();
  for(var i=0; i<division.length; i++){
    division[i].display();
  }

  for(var i=0; i<plinko.length; i++){
    plinko[i].display();
  }

  if(frameCount%60 ==0){
    particle.push(new Particle(random(width/2-20,width/2+20),10));
  }

  for(var i=0; i<particle.length; i++){
    particle[i].display();
  }


}