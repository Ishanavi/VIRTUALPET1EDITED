var dog,dogim1,dogim2;
var foodS,foodStock;
var database;

function preload()
{
  dogim1 = loadImage("images/dogImg.png");
  dogim2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  
  
  dog = createSprite(250,250,10,10);
  dog.addImage("dimg",dogim1);
  dog.scale = 0.2;
  

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);


}


function draw() 
{  
  background(46,139,87);

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage("dimg",dogim2);
  }

  drawSprites();

  textSize(10);
  fill("black");
  text("Note: Press UP_ARROW Key to feed the dog.",250,10)


}




function readStock(data)
{
  foodS = data.val();
}


function writeStock(x)
{

   if(x<=0)
   {
     x=0;
   }
   else
   {
     x=x-1;
   }


  database.ref('/').update({
      Food:x
    })
}

