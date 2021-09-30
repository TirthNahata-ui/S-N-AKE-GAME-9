class Food {
    constructor(x,y){
   this.body= createSprite(x,y)
  this.image1=loadImage("Apple.png")
  this.image2=loadImage("banana.png")
  this.image3=loadImage("grapes.png")

  this.body.scale=0.2
  var rand=random([1,2,3])
  switch(rand){
    case 1:this.body.addImage(this.image1);break;
    case 2:this.body.addImage(this.image2);break;
    case 3:this.body.addImage(this.image3);break;
  }
    }
}