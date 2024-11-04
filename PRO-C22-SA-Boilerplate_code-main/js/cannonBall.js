
class CannonBall{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.r = 30
        this.trajetoria = [[],[]]
        this.body = Bodies.circle(x,y,this.r,options)
        this.Image = loadImage("./assets/cannonball.png")
        World.add(world, this.body);
    }
    

    shoot(){
        var newAngle = cannon.angle - 28;
        //converter de graus para radianos
        newAngle = newAngle * (3.14/180)
        //transformar a posição x e y em angulos
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false)
        //setVelocity SÓ ACEITA angulos em GRAUS
        Matter.Body.setVelocity(this.body, {x:velocity.x *(180/3.14),y:velocity.y *(180/3.14)})
    }

    remove(index) {
        Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
        //zera a velocidade
        setTimeout(() => {
          Matter.World.remove(world, balls[index].body);
          delete balls[index];
        }, 1000);
      }

    display(){
        push()
        imageMode(CENTER)
        image(this.Image,this.body.position.x,this.body.position.y,this.r,this.r)
        pop()

        if(this.body.velocity.x > 0 && this.body.position.x > 180){
            var position = [this.body.position.x,this.body.position.y]
            this.trajetoria.push(position)
        }
        for (var i = 0; i < this.trajetoria.length; i++) {
            image(this.Image, this.trajetoria[i][0], this.trajetoria[i][1], 5, 5);
        }

    }
}