const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground2, ground3;
var body, alsobody, chain;

function setup() {
  var canvas = createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height, width, 10);
  body = new Ball(400, 200);

}

function draw() {
  background(0);
  Engine.update(engine);
  textSize(50);
  text("Use Space To Jump", 750, 200);
  text("Use Arrow Keys To Move Around", 750, 300);
  ground.display();
  body.display();
  if (keyDown("left")) {
    Matter.Body.applyForce(body.body,body.body.position,{x:-10, y:0});
  }
  if (keyDown("right")) {
    Matter.Body.applyForce(body.body,body.body.position,{x:10, y:0});
  }
  if (keyWentDown("space")) {
    Matter.Body.applyForce(body.body,body.body.position,{x:0, y:-60});
  }
}