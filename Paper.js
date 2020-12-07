class Paper  {
    constructor(x,y){
      var options = {
        'restitution' : 0.8,
        'friction' : 0.3,
        'density' : 1.2
      }
      this.body = Bodies.circle(x,y,20,options);
      //this.width = 50;
      //this.height = 50;
      this.image = loadImage("paper.png")

      World.add(world,this.body);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var pos = this.body.position;
      push ();
      translate(pos.x,pos.y);
      fill ("white");
      imageMode(CENTER);
      image(this.image,0,0,60,60);
      pop ();
    }
  }