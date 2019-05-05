let miner;
function setup() {
  createCanvas(400, 400);
  miner = new minero(width,100);
}

function draw() {
  background(220);
  // suelo
  fill(0,156,50);
  rect(0,350,400,400);
  fill(136,94,52);
  rect(0,370,400,40);

  // call obj functs
  miner.display();
  miner.keyReleased();
}

class minero{
  constructor(x,y){
    this.x= x;
    this.y= y;
  }
display(){
  ellipse(this.x,this.y,30,30);
  }
keyReleased() {
  if (keyCode === LEFT_ARROW) {
      this.x +=-0.55;
    } else if (keyCode === RIGHT_ARROW) {
      this.x +=0.55;
    }
  }
}
