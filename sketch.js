
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var hoop1;
var hoop2;
var hoop_img,hoop;
var bg,wallL,wallR,wallU;

function preload() {
   hoop_img = loadImage('image_processing20200817-32184-y153u6.png');
   bg = loadImage('istockphoto-1097251356-612x612.jpg');
}

function setup() {
  createCanvas(600,400);

  engine = Engine.create();
  world = engine.world;

  hoop = createImg('image_processing20200817-32184-y153u6.png');
  hoop.position(480,100);
  hoop.size(120,300);

  leftArrow = createImg('download.jpg');
  leftArrow.position(200,200);
  
  var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:2.5
		}
  var ground_options ={
    isStatic: true,
    
    //make invisible
    };

    var hoop1_options ={
      isStatic: true,
      friction:20
      
      //make invisible
    };

    var hoop2_options ={
      isStatic: true,
      
      //make invisible
    };

    var wallL_options ={
      isStatic: true,
      };
      
      var wallR_options ={
        isStatic: true,
        };

        var wallU_options ={
          isStatic: true,
          };

    ball = Bodies.circle(100,180,20,ball_options);
		World.add(world,ball);
    ground = Bodies.rectangle(200,400,1000,20,ground_options);
    World.add(world,ground);
    hoop1 = Bodies.rectangle(530,170,20,100,hoop1_options);
    World.add(world,hoop1);
    hoop2 = Bodies.rectangle(470,200,20,50,hoop2_options);
    World.add(world,hoop2);
    wallL = Bodies.rectangle(0,300,1,4000,wallL_options);
    World.add(world,wallL);
    wallR = Bodies.rectangle(600,300,1,4000,wallR_options);
    World.add(world,wallR);
    wallU = Bodies.rectangle(200,1,1000,1,wallU_options);
    World.add(world,wallU);
    
   
    
    Engine.run(engine);
}


function draw() 
{
  background(51);
  image(bg,0,0,width,height);

  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  fill(0,0,0,0);
  
  rect(ground.position.x,ground.position.y,1000,20);
  ellipse(ball.position.x,ball.position.y,15);
  rect(hoop1.position.x,hoop1.position.y,0.1,100);
  rect(hoop2.position.x,hoop2.position.y,0.1,40);
  rect(wallL.position.x,wallL.position.y,1,4000);
  rect(wallR.position.x,wallR.position.y,1,4000);
  rect(wallU.position.x,wallU.position.y,1000,1);

  fill("black");
  textAlign("center");
  textSize(20);
  text("Controls:", 50, 30);

  fill("black");
  textAlign("center");
  textSize(40);
  text("↑", 65, 65);

  fill("black");
  textAlign("center");
  textSize(40);
  text("←", 30, 65);

  fill("orange");
  ellipse(ball.position.x,ball.position.y,15);

  //drawSprites();
}

function applyForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:80,y:-180});
}

function applyForceAgain(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-10,y:0});
}

function keyPressed() {
if (keyCode === UP_ARROW) {
 applyForce();
 }
 if (keyCode === LEFT_ARROW) {
  applyForceAgain();
  }
}
