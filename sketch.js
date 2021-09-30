function setup() {
  createCanvas(800,800);
  snake = new Snake(200,200)
  food = new Food(400,400)
  poison=new Poison(200,200)
}

function draw() {
  background(0);  
  drawSprites();
  if(keyDown(RIGHT_ARROW)){
    snake.body.x+=5
    snake.body.rotation=90
  }
  if(keyDown(LEFT_ARROW)){
    snake.body.x-=5
    snake.body.rotation=-90
  }
  if(keyDown(UP_ARROW)){
    snake.body.y-=5
    snake.body.rotation=-180
  }
  if(keyDown(DOWN_ARROW)){
    snake.body.y-=5
    snake.body.rotation=0
  }
  if(frameCount%80===0){
    food.body.destroy()
    food = new Food(random(50,750),random(50,750))
  }
  if(frameCount%250===0){
    poison= new Poison(random(50,750),random(50,750))
  }
}
