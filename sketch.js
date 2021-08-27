
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

// add the required varaibles
var world, engine;
var ball1, ball2, ball3, ball4, ball5;
var roof;

function setup(){
    
    //create a canvas to display the objects
    createCanvas(800, 600);
    rectMode(CENTER);

    // create a engine and a world
    engine = Engine.create();
    world = engine.world;

    // add the balls
    ball1 = new Newton_Ball(320,575,40);
	ball2 = new Newton_Ball(360,575,40);
	ball3 = new Newton_Ball(400,575,40);
	ball4 = new Newton_Ball(440,575,40);
	ball5 = new Newton_Ball(480,575,40);    

    

}



