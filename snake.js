class Snake{
    constructor(x,y){
        this.body = createSprite(x,y)
this.image = loadImage("snake.png")

this.body.addImage(this.image)
this.body.scale=0.5
    }
}