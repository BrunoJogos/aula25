class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonBaseImage = loadImage("./assets/cannonBase.png")
    this.canonImage = loadImage("./assets/canon.png")
    
  }
  display(){
    //base
    image(this.cannonBaseImage,70,20,200,200)
    
    if(keyIsDown(RIGHT_ARROW)&& this.angle<70){
      this.angle += 1;
    }
    if(keyIsDown(LEFT_ARROW)&& this.angle>20){
      this.angle -= 1;
    }

    //atirador
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.canonImage,0,0,this.width,this.height)
    pop()
  }
}
