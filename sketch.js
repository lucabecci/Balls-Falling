let circles = [];
let h1;
let slider;
let title;
function setup() {
  h1 = createElement('h1', 'BALLS FALLING WITH TEXT')
  createCanvas(400, 400);
  let button = createButton('Click me');
  button.mousePressed( () => {
    for(let i = 0; i < 100; i++ ){
    let x = random(width);
    let y = random(height);
    circles[i] = new Circle(x,y,slider.value());
  }
  });
  slider = createSlider(0,30,15)
  title = createInput('your canvas title');
}

function draw(){
  background(0);
  fill(255);
  text(title.value(),150,30)

  for(let b of circles){
    b.view()
    b.move()
    b.bounce()
  }
}

class Circle {
  constructor(tempX,tempY, tempR){
      this.x = tempX;
      this.y = tempY;
      this.xspeed = random(-10,10);
      this.yspeed = random(5,10);
      this.radius = tempR
  }
  view(){
    noStroke();
    fill(random(0,255),random(0,255),random(0,255))
    ellipse(this.x,this.y,this.radius * 2)
  }

  move(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  bounce(){
    if(this.x <= 0 || this.x >= width){
      this.xspeed = this.xspeed * -1
    }
    if(this.y <= 0 || this.y >= height){
     this.yspeed = this.yspeed * -1;
      this.radius = random(1,7)

    }
  }
}
