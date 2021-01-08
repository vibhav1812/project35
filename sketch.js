//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, dogImg2


function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000, 1000);

  dog = createSprite(500,500,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4
  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);  
}


function draw() {  
background("green");
  
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg2);
}

textSize(30);

fill("white")
text("Note : Press UP_ARROW Key to Feed Drago Milk", 300, 50);


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    Food : x 
  })
}



