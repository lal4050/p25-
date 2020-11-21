class Paper {
    constructor(x, y,width,height,r) {
      var options = {
          'restitution':0.1,
          'friction':0,
          'density':1.0
      }
      this.body=Bodies.circle(x, y,(r-20)/2, options)
      this.width = width;
      this.height = height;
      this.r=r
      World.add(world, this.body);
      this.image=loadImage("paper.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.r,this.r);
      pop();

    }
  }
