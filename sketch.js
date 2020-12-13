//Create variables here
var dog ,dogImg, happyDog;
var database;
var foodS , foodStock,food;
var milk,milkImg;

function preload()
{
  dogImg=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
  
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  
  dog=createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.1;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
  
}

function draw() {  
background("blue");

if(keyWentDown(UP_ARROW)){
   writeStock(foodS); 
   dog.addImage(happyDog); 
  }

  drawSprites();

fill("white");
text("Note:Press UP_ARROW to feed Shreya's pet",150,20);
stroke(0);
textSize=20;
fill("white");
text("Food remaining=20",210,200);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
Food:x
  })
}


