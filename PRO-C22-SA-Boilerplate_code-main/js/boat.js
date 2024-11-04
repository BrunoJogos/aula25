
class Boat{
    constructor(x,y,width,height,boatPos){
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width
        this.height = height
        this.boatPos = boatPos
        this.Image = loadImage("./assets/boat.png")
        World.add(world,this.body)
    }
    remove(index){
        setTimeout(()=>{
          //removendo o corpo do mundo
          Matter.World.remove(world, boats[index].body)
          delete boats[index]
        },2000)
      }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)

        imageMode(CENTER)
        image(this.Image,0,this.boatPos,this.width,this.height)
        pop()
    }
}