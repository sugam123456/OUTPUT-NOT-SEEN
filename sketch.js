const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var computer2,computerBase2;
var player2,playerBase2;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
//create a player object from the Player class.
playerBase2=new playerBase2(500,random(50,height - 400),200,150)
computerBase = new ComputerBase(
  width - 400,
  random(500, height - 400),
  200,
  150
);
computer2 = new Computer2(
  width - 280,
  computerBase2.body.position.y - 153,
  50,
  180
);










  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  
}

function draw() {
  background(189);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
//call the display() function for the player object.
  Computer2.display
  computerBase2.display();


  computerBase.display();
  computer.display();
  

}
