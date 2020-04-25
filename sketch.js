const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var drops = [];
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for(var i = 0; i < 6000; i++){
  drops[i] = new Drops();
  drops[i].lifetime = 1;
  }
}

function draw() {
  background(0,200,255);  
  Engine.update(engine);
  for (var i = 0; i < drops.length; i++) {
    drops[i].display();
  }
}