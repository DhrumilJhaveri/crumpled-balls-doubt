class DustBin {
    constructor(x, y, width, height){
      this.body = Bodies.rectangle(x, y, width, height);
      this.width=width;
      this.height=height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
 
 
  };
  